"use client";

import { useState } from "react";
import {
  Button,
  DialogBody,
  DialogFooter,
  DialogHeader,
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Typography,
} from "./material-components";
import Modal from "./Modal";

export default function ButtonShare() {
  const [successCopy, setSuccessCopy] = useState(false);
  const [viewModals, setViewModals] = useState(false);

  const handleCopy = async (text) => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
        setSuccessCopy(true);
        setTimeout(() => {
          setSuccessCopy(false);
        }, 5000);
      } catch (err) {
        alert("Gagal menyalin teks ke clipboard: ", err);
      }
    } else {
      alert("Clipboard API tidak didukung di browser ini.");
    }
  };
  return (
    <>
      <Modal view={viewModals}>
        <DialogHeader>Share to Sosmed</DialogHeader>
        <DialogBody>
          <List>
            <ListItem>
              <ListItemPrefix>
                <i class="bx bxl-whatsapp text-4xl"></i>
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  Whatsapp
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Share to Whatsapp
                </Typography>
              </div>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <i class="bx bxl-instagram text-4xl"></i>
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  instagram
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Share to instagram
                </Typography>
              </div>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <i class="bx bxl-facebook text-4xl"></i>
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  facebook
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Share to facebook
                </Typography>
              </div>
            </ListItem>
            {successCopy ? (
              <ListItem className="bg-green-100 focus:bg-green-100">
                <ListItemPrefix>
                  <i class="bx bx-check text-4xl text-green-600"></i>
                </ListItemPrefix>
                <div>
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="text-green-600"
                  >
                    Copied
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal text-green-600"
                  >
                    Success Copy to Clipboard
                  </Typography>
                </div>
              </ListItem>
            ) : (
              <ListItem onClick={() => handleCopy("https://example.com")}>
                <ListItemPrefix>
                  <i class="bx bx-copy-alt text-4xl"></i>
                </ListItemPrefix>
                <div>
                  <Typography variant="h6" color="blue-gray">
                    Copy URL
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    Copy URL to Clipboard
                  </Typography>
                </div>
              </ListItem>
            )}
          </List>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="gradient"
            color="red"
            onClick={() => setViewModals(false)}
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Modal>
      <Button
        className="flex items-center gap-1"
        onClick={() => setViewModals(true)}
      >
        <i class="bx bx-share-alt"></i>
        <span>Share</span>
      </Button>
    </>
  );
}
