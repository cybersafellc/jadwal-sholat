"use client";

import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "./material-components";

export default function Modal({ view, children }) {
  return (
    <>
      <Dialog open={view}>{children}</Dialog>
    </>
  );
}
