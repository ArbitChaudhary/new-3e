import Image from "next/image";
import styles from "./vendors.module.scss";
import pot from "../../../public/ClayJar .png";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import VolunteerForm from "./volunteer_form";
import VendorForm from "./vendor_form";
import PerformerForm from "./perform_form";

function Vendors() {
  const [openPerformerApp, setOpenPerformerApp] = useState<boolean>(false);
  const [openVendorForm, setOpenVendorForm] = useState<boolean>(false);
  const [openVolunteerForm, setOpenVolunteerForm] = useState<boolean>(false);

  return (
    <>
      <div className={styles.container} id="vendor">
        <div className={styles.vendor}>
          {/* <div className={styles.bg_flower}>
            <Image src={bgImage} alt="bg" fill />
          </div> */}
          <div className={styles.head}>Support & Vendor</div>
          <div className={styles.vendor_grid}>
            <div className={styles.left}>
              <div
                className={styles.mapplic_container}
                style={{ position: "relative" }}
              >
                <mapplic-map data-json="https://mapplic.com/getMapData?id=nmUT5fBcrZJTHltRzd0U">
                  <script
                    type="text/javascript"
                    id="mapplic-script"
                    src="https://mapplic.com/mapplic.js"
                  ></script>
                </mapplic-map>
                {/* <MapplicMap /> */}
              </div>
              <button
                className={styles.vendor_application}
                onClick={() => setOpenVendorForm(true)}
              >
                {" "}
                Vendor Application
              </button>
              {/* <button className={styles.view_vendor_btn}>
                Veiw All Vendors{" "}
              </button> */}
              {/* </div> */}
            </div>
            <div className={styles.right}>
              <div className={styles.description}>
                Dashain Tihar Fest 2024 offers a unique chance to connect with
                the rapidly growing Nepali-speaking community in Virginia, DC,
                and Maryland. With a local population nearing 100,000, this
                event is an excellent opportunity for businesses to gain
                visibility and connect with the vibrant Nepalese and South-Asian
                community.
              </div>
              <button
                className={styles.performers}
                onClick={() => setOpenPerformerApp(true)}
              >
                Performer Application
              </button>
              <button
                className={styles.volunteer}
                onClick={() => setOpenVolunteerForm(true)}
              >
                Volunteer Application
              </button>
              <button
                className={styles.vendor_app}
                onClick={() => setOpenVendorForm(true)}
              >
                Vendor Application
              </button>
              <button
                className={styles.volunteer_support}
                onClick={() => setOpenVolunteerForm(true)}
              >
                Volunteer Support
              </button>
              {/* <button className={styles.vendor_view}>View All Vendors</button> */}
            </div>
          </div>
          <div className={styles.cultural_pot}>
            <Image
              src={pot}
              alt="Pot"
              height={346}
              width={149}
              // layout="responsive"
              style={{ position: "relative", objectFit: "contain" }}
            />
          </div>
          {/* start form pop up */}
          <Dialog
            open={openPerformerApp}
            onClose={() => setOpenPerformerApp(false)}
            maxWidth="md"
            fullWidth
          >
            <DialogTitle
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ fontWeight: 600, fontSize: { xs: "18px", md: "20px" } }}
              >
                Performer Application
              </Typography>
              <IconButton onClick={() => setOpenPerformerApp(false)}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <Divider />
            <DialogContent>
              <PerformerForm />
            </DialogContent>
          </Dialog>
          {/* end form pop up */}
          {/* vendor application form start */}
          <Dialog
            open={openVendorForm}
            onClose={() => setOpenVendorForm(false)}
            maxWidth="md"
            fullWidth
          >
            <DialogTitle
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ fontWeight: 600, fontSize: { xs: "18px", md: "20px" } }}
              >
                Vendor Application
              </Typography>
              <IconButton onClick={() => setOpenVendorForm(false)}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <Divider />
            <DialogContent>
              <VendorForm />
            </DialogContent>
          </Dialog>
          {/* vendor application form end */}

          {/* volunteer application */}
          <Dialog
            open={openVolunteerForm}
            onClose={() => setOpenVolunteerForm(false)}
            maxWidth="md"
            fullWidth
          >
            <DialogTitle
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ fontWeight: 600, fontSize: { xs: "18px", md: "20px" } }}
              >
                Volunteer Application
              </Typography>
              <IconButton onClick={() => setOpenVolunteerForm(false)}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <Divider />
            <DialogContent>
              <VolunteerForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}

export default Vendors;
