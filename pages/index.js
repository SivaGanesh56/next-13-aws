import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div className="flex-1 p-8">
      <h2 className="mb-4 text-3xl font-bold">Welcome to Your App</h2>

      <section className="mb-8">
        <h3 className="mb-2 text-2xl font-bold">About Us</h3>
        <p className="text-lg">Learn more about our company and what we do.</p>
        <Link href="/features" className="text-blue-500 hover:underline">
          Read more
        </Link>
      </section>

      <section className="mb-8">
        <h3 className="mb-2 text-2xl font-bold">Services</h3>
        <ul className="pl-4 list-disc">
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
      </section>

      <section>
        <h3 className="mb-2 text-2xl font-bold">Contact Us</h3>
        <p className="text-lg">
          Feel free to reach out to us for any inquiries or collaborations.
        </p>
        <a href="/contact" className="text-blue-500 hover:underline">
          Contact
        </a>
      </section>
    </div>
  );
};

export default index;
