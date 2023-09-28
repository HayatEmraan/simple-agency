const { default: Brands } = require("@/components/home/brands/brands");
const { default: Contacts } = require("@/components/home/contacts/Contacts");
const { default: Team } = require("@/components/team/Team");


const Page = () => {
  return (
    <>
      <Team />
      <Contacts />
      <Brands />
    </>
  );
};

export default Page;
