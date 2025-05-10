import React from "react";
import { notFound } from "next/navigation";

interface TemplatePageProps {
  params: {
    templateId: string;
  };
}

export default function TemplatePage({ params }: TemplatePageProps) {
  if (params.templateId !== "abc") {
    notFound();
  }
  return <div>template page: {params.templateId}</div>;
}
