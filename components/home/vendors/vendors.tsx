import Image from "next/image";
import styles from "./vendors.module.scss";
import vendorImage from "../../../public/vendor-banner.png";
import pot from "../../../public/ClayJar .png";
import bgImage from "../../../public/bg-flower.png";
import MapplicMap from "./maplic_map";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CustomInput from "@/common/ui/custom_input/custom_input";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import CustomTextArea from "@/common/ui/text_area/custom_text_area";

function Vendors() {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const {
    control,
    formState: { errors },
  } = useForm();
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
              {/* <mapplic-map data-json="https://mapplic.com/getMapData?id=enYM9UEjC107fMcdVuI8">
                <script
                  type="text/javascript"
                  id="mapplic-script"
                  src="https://mapplic.com/mapplic.js"
                ></script>
              </mapplic-map> */}
              {/* <mapplic.map data-json="https://mapplic.com/getMapData?id=FAuMxQrcODG1iqqSk0Eh">
                <script
                  type="text/javascript"
                  id="mapplic-script"
                  src="https://mapplic.com/mapplic.js"
                ></script>
              </mapplic.map> */}
              {/* <div className={styles.vendor_image}>
                <Image
                  src={vendorImage}
                  alt="Vendor"
                  height={564}
                  width={580}
                  layout="responsive"
                  style={{ position: "relative", objectFit: "cover" }}
                />
              </div> */}
              {/* <mapplic-map
                id="my-map"
                data-json="https://mapplic.com/getMapData?id=6AAA3HVY6u05TYjJvG42"
              >
                <script
                  type="text/javascript"
                  id="mapplic-script"
                  src="https://mapplic.com/mapplic.js"
                ></script>
              </mapplic-map> */}
              <MapplicMap />
              {/* <mapplic-map data-json="https://mapplic.com/getMapData?id=nmUT5fBcrZJTHltRzd0U">
                <script
                  type="text/javascript"
                  id="mapplic-script"
                  src="https://mapplic.com/mapplic.js"
                ></script>
              </mapplic-map> */}
              <button className={styles.vendor_map_btn}> Vendor Map</button>
              <button className={styles.vendor_application}>
                {" "}
                Vendor Application
              </button>
              <button className={styles.view_vendor_btn}>
                Veiw All Vendors{" "}
              </button>
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
                onClick={() => setOpenForm(true)}
              >
                Performer Application
              </button>
              <button className={styles.volunteer}>
                Volunteer Application
              </button>
              <button className={styles.vendor_app}>Vendor Application</button>
              <button className={styles.volunteer_support}>
                Volunteer Support
              </button>
              <button className={styles.vendor_view}>View All Vendors</button>
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
            open={openForm}
            onClose={() => setOpenForm(false)}
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
                sx={{ fontWeight: 600, fontSize: { xs: "20px", md: "30px" } }}
              >
                Performer Application
              </Typography>
              <IconButton onClick={() => setOpenForm(false)}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <div className={styles.form_content}>
                <CustomInput
                  label="Name"
                  name="name"
                  control={control}
                  errors={errors}
                />
                <CustomInput
                  label="Email"
                  name="email"
                  control={control}
                  errors={errors}
                />
                <CustomInput
                  label="Phone Number"
                  name="phone_number"
                  control={control}
                  errors={errors}
                  type="number"
                />
                <CustomInput
                  label="Preferre method of contact"
                  name="contact_method"
                  control={control}
                  errors={errors}
                />

                <CustomInput
                  label="Website/URL"
                  name="name"
                  control={control}
                  errors={errors}
                />
              </div>
              <div className={styles.form_textarea}>
                <CustomTextArea
                  label="Descriptioin"
                  name="description"
                  control={control}
                  errors={errors}
                />
              </div>
              <div className={styles.button_container}>
                <button>Continue</button>
              </div>
            </DialogContent>
          </Dialog>
          {/* end form pop up */}
        </div>
      </div>
    </>
  );
}

export default Vendors;
