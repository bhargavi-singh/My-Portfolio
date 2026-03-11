import { motion } from "framer-motion";
import { MdEmail, MdPhone } from "react-icons/md";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const Contact = () => {
  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <div className="mt-12 flex flex-col gap-8">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="bg-tertiary p-4 rounded-xl">
                <MdEmail className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-secondary text-sm font-medium mb-1">Email</span>
                <span className="text-white text-lg font-medium cursor-default">
                  {config.html.email}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="bg-tertiary p-4 rounded-xl">
                <MdPhone className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-secondary text-sm font-medium mb-1">Phone</span>
                <span className="text-white text-lg font-medium cursor-default">
                  {config.html.phone}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-4"
          >
            <p className="text-secondary text-sm leading-relaxed">
              Feel free to reach out if you&apos;d like to collaborate or have any questions. 
              I&apos;m always open to discussing new projects and opportunities.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
