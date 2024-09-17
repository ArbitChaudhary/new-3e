import CustomInput from "@/common/ui/custom_input/custom_input";
import CustomTextArea from "@/common/ui/text_area/custom_text_area";
import styles from "./vendors.module.scss";
import { useForm } from "react-hook-form";

function VendorForm() {
  const {
    control,
    formState: { errors },
  } = useForm();

  return (
    <form>
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
          label="Descriptioin"
          name="description"
          control={control}
          errors={errors}
        />
      </div>
      <div className={styles.button_container}>
        <button type="submit" style={{ position: "relative" }}>
          Continue
        </button>
      </div>
    </form>
  );
}

export default VendorForm;
