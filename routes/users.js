const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// Update user
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
                return res.status(500).json(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Account has been updated");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(401).json("You can update only your account");
    }
});

// Delete user
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.user.isAdmin) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been deleted");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(401).json("You can delete only your account");
    }
});
//get user
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json("User not found");
        }
        res.status(200).json(user);
    } catch (err) {
        return res.status(500).json(err);
    }
});
//follow a user
router.put("/:id/follow", async (req, res) => {
    if (req.body.userId !== req.params.id) {  // Ensure a user cannot follow themselves
        try {
            const userToFollow = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);

            if (!userToFollow.followers.includes(req.body.userId)) {
                await userToFollow.updateOne({ $push: { followers: req.body.userId } });
                await currentUser.updateOne({ $push: { following: req.params.id } });
                res.status(200).json("User has been followed");
            } else {
                res.status(403).json("You are already following this user");
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        res.status(403).json("You cannot follow yourself");
    }
});

//unfollow a user
router.put("/:id/unfollow", async (req, res) => {
    if (req.body.userId !== req.params.id) {  // Ensure a user cannot unfollow themselves
        try {
            const userToUnfollow = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);

            if (userToUnfollow.followers.includes(req.body.userId)) {
                await userToUnfollow.updateOne({ $pull: { followers: req.body.userId } });
                await currentUser.updateOne({ $pull: { following: req.params.id } });
                res.status(200).json("User has been unfollowed");
            } else {
                res.status(403).json("You are not following this user");
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        res.status(403).json("You cannot unfollow yourself");
    }
});


// Test route
router.get("/", (req, res) => {
    res.send("hey it's user route");
});

module.exports = router;
