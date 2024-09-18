import CustomInput from "@/common/ui/custom_input/custom_input";
import CustomTextArea from "@/common/ui/text_area/custom_text_area";
import styles from "./vendors.module.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function VendorForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);

    try {
      const response = await axios.post(
        "https://zy1jw4oxkf.execute-api.us-east-1.amazonaws.com/dev/vendorform",
        data
      );

      if (response.status === 200) {
        toast.success("Form submitted successfully!");
        reset();
      } else {
        toast.error("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
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
            label="Preferred method of contact"
            name="contact_method"
            control={control}
            errors={errors}
          />
          <CustomInput
            label="Website/URL"
            name="url"
            control={control}
            errors={errors}
          />
        </div>
        <div className={styles.form_textarea}>
          <CustomTextArea
            label="Description"
            name="description"
            control={control}
            errors={errors}
          />
        </div>
        <div className={styles.button_container}>
          <button
            type="submit"
            style={{ position: "relative" }}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
}

export default VendorForm;
