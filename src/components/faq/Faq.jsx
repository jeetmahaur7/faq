import FaqItem from "./FaqItem";

const Faq = () => {
  const data = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live",
      answer:
        "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    },
  ];
  return (
    <>
      {data.map((item, index) => {
        return <FaqItem item={item} index={index} />;
      })}
    </>
  );
};

export default Faq;
