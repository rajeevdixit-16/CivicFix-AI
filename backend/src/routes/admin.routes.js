import express from "express";
import {
  getWardComplaints,
  updateComplaintStatus,
  getEscalations,
  getAuthorities,
  createAuthority,
  updateAuthority,
  deactivateAuthority,
  reactivateAuthority,
  deleteAuthority,
} from "../controllers/admin.controller.js";

import auth, { authorize } from "../middleware/auth.middleware.js";

const router = express.Router();

// Authority dashboard – ward complaints
router.get(
  "/complaints",
  auth,
  getWardComplaints
);

// Update complaint status
router.patch(
  "/complaints/:complaintId/status",
  auth,
  updateComplaintStatus
);

// Escalation list (admin only)
router.get(
  "/escalations",
  auth,
  getEscalations
);

// Authority management (admin only)
router.get(
  "/authorities",
  auth,
  authorize("admin"),
  getAuthorities
);

router.post(
  "/authorities",
  auth,
  authorize("admin"),
  createAuthority
);

router.put(
  "/authorities/:id",
  auth,
  authorize("admin"),
  updateAuthority
);

router.patch(
  "/authorities/:id/deactivate",
  auth,
  authorize("admin"),
  deactivateAuthority
);

router.patch(
  "/authorities/:id/reactivate",
  auth,
  authorize("admin"),
  reactivateAuthority
);

router.delete(
  "/authorities/:id",
  auth,
  authorize("admin"),
  deleteAuthority
);

export default router;
