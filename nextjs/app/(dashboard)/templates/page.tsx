import React from "react";

type Template = {
  name: string;
};

export default async function TemplatesPage() {
  const templatePromise = new Promise<Template[]>((resolve) => {
    setTimeout(() => {
      resolve([
        { name: "Template A" },
        { name: "Template B" },
        { name: "Template C" },
      ]);
    }, 2000);
  });

  const templates = await templatePromise;

  return (
    <div>
      <h1>Templates Page</h1>
      {templates.map((template, idx) => (
        <div key={idx}>{template.name}</div>
      ))}
    </div>
  );
}
