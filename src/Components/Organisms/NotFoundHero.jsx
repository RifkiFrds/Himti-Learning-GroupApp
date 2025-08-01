import React from "react";
import Button from "../Atoms/Button";

const NotFoundHero = () => {
  return (
    <section class="flex items-center h-screen p-16 bg-gray-50 dark:bg-gray-700 animate-fade-in-up">
      <div class="container flex flex-col items-center ">
        <div class="flex flex-col gap-6 max-w-md text-center">
          <h2 class="font-extrabold text-9xl text-primary dark:text-gray-100">
            <span class="sr-only">Error</span>404
          </h2>
          <p class="text-2xl md:text-3xl dark:text-gray-300">
            Maaf. Sepertinya Kamu Tersesat
          </p>
          <Button variant="secondary" as="Link" to="/">
            Back To Home
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFoundHero;
