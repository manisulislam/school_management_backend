import { Router } from "express";
import { 
    loginUser, 
    logOutUser, 
    registerUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateUserDetails,
    updateAvatar,
    updateCoverImage,
     } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router= Router()

router.route("/register").post(upload.fields([
    {
        name:"avatar",
        maxCount:1
    },
    {
        name:"coverImage",
        maxCount:1
    }
]) ,registerUser)

router.route("/login").post(loginUser);

// secure route
router.route("/logout").post(verifyJWT,logOutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/change-password").post(verifyJWT, changeCurrentPassword);
router.route("/current-user").get(verifyJWT, getCurrentUser);
router.route("/update-account").patch(verifyJWT,updateUserDetails);

router.router("/update-avatar").patch(verifyJWT, upload.single("avatar"), updateAvatar);
router.route("/update-coverImage").patch(verifyJWT, upload.single("coverImage"), updateCoverImage);



export default router;