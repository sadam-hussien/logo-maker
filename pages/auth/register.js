import AuthLayout from "../../modules/auth/layout";

export default function Register() {
  return <div>register</div>;
}

Register.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
