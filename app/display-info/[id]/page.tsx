"use client";
import { DisplayInfoView } from "@/features/DisplayInfo";
import { MainLayout } from "@/layout";
import { MainTitle } from "@/ui";

const page = ({ params }: { params: { id: string } }) => {
  if (!params?.id)
    return (
      <div style={{ textAlign: "center", marginTop: "10rem" }}>
        <MainTitle
          text='DATA NOT FOUND'
          underText='Sorry, please refresh the page'
        />
      </div>
    );
  return (
    <MainLayout>
      <DisplayInfoView id={params?.id} />
    </MainLayout>
  );
};

export default page;
