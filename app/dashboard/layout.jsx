import React from "react";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>
        <li
          style={{
            color: "yellow",
            textAlign: "center",
            fontSize: 30,
            backgroundColor: "violet",
          }}
        >
          NAVIGATION WILL BE IN ALL NESTED PAGES
        </li>
      </nav>

      {children}
    </section>
  );
}
