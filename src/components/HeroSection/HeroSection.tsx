import Container from "../Container";

function LeftSide() {
  return (
    <div>
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
    <section className="bg-userVeryLightGray h-[735px]">
      <Container>
        <div className="grid h-full grid-cols-[1fr_650px] grid-rows-1 items-center justify-between">
          <LeftSide />
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
