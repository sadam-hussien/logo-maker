export default function Auth() {
  return <div>redirect to login page</div>;
}

export const getServerSideProps = async (ctx) => {
  return {
    redirect: {
      destination: "auth/login",
      permanent: false,
    },
  };
};
