import mockupImg from "../../assets/images/image-mockups.png";
import Container from "../Container";

function LeftSide() {
  return (
    <div className="w-[40%]">
      <h1 className="text-3xl">Next generation digital banking</h1>
      <p>
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much more.
      </p>
      <button type="button" className="bg-userLimeGreen">
        Request Invite
      </button>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[735px] bg-userVeryLightGray">
      <Container>
        <div className="flex h-full items-center justify-between">
          <LeftSide />
          <div className="h-full w-[60%] bg-userBgIntroDesktop bg-[length:170%] bg-[10%_60%] bg-no-repeat">
            <img
              src={mockupImg}
              alt="Mobile phones mockup"
              className="w-full translate-x-32"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
