import React from "react";
import "../styles/Quotation.css";

export default function Quotation({ text, author }) {
  return (
    <section className="quotation-section">
      <blockquote>
        "{text}"
        <cite> - {author}</cite>
      </blockquote>
    </section>
  );
}
