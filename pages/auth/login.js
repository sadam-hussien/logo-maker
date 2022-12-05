import AuthLayout from "../../modules/auth/layout";

export default function Login() {
  return <div>login</div>;
}

Login.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
