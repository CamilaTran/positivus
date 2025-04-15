interface Step {
  title: string;
  description: string;
}

const stepsList: Array<Step> = [
  {
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Research and Strategy Development",
    description: "We conduct comprehensive market research and competitor analysis to uncover insights. Based on the findings, we craft a customized strategy designed to meet your business goals and resonate with your target audience.",
  },
  {
    title: "Implementation",
    description: "Our team begins executing the strategy across relevant channels, whether it's SEO, paid ads, content marketing, or web development. We ensure each tactic aligns with your brand and desired outcomes.",
  },
  {
    title: "Monitoring and Optimization",
    description: "We track performance metrics in real-time and monitor campaign effectiveness. By analyzing key indicators, we make data-driven adjustments to improve ROI and ensure continuous progress.",
  },
  {
    title: "Reporting and Communication",
    description: "You’ll receive regular reports that detail campaign results, insights, and next steps. We keep communication open to ensure alignment and transparency at every stage of the process.",
  },
  {
    title: "Continual Improvement",
    description: "We review the full campaign cycle, identify opportunities for refinement, and evolve our approach. Our goal is not just to deliver results, but to help you grow sustainably over time.",
  },
];

export { stepsList };
