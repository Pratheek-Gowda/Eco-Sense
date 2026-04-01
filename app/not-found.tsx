"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, LifeBuoy } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

export default function NotFound(): JSX.Element {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-3xl flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="w-full rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm"
        >
          {/* Primary error state */}
          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.35 }}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600"
          >
            Pratheek Enterprises Admin Portal
          </motion.p>

          <motion.h1
            {...fadeInUp}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mt-4 text-6xl font-extrabold leading-none text-slate-900"
          >
            404
          </motion.h1>

          <motion.h2
            {...fadeInUp}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-3 text-2xl font-semibold text-slate-800"
          >
            Page Not Found
          </motion.h2>

          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mx-auto mt-4 max-w-xl text-base text-slate-600"
          >
            The page you are looking for might have been moved or doesn&apos;t exist.
          </motion.p>

          {/* Smart navigation actions */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Return to Dashboard
            </Link>

            <Link
              href="mailto:support@pratheekenterprises.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 underline decoration-indigo-300 underline-offset-4 transition hover:text-indigo-900"
            >
              <LifeBuoy className="h-4 w-4" aria-hidden="true" />
              Contact Support
            </Link>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.25 }}
          className="mt-6 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-600"
        >
          Secured by Pratheek Enterprises
        </motion.p>
      </div>
    </main>
  );
}
