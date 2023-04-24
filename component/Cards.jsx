import React, { useState } from "react";
import { motion } from "framer-motion";

function Cards() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card-container">
      <motion.div className="card">
        <motion.h2>Stranger Things</motion.h2>
        <motion.div>
          <p>
            lorem ispum Stranger Things lorem ispum Stranger Thingslorem ispum
            Stranger Things lorem ispum Stranger Things lorem ispum Stranger
          </p>
          <p>
            lorem ispum Stranger Things lorem ispum Stranger Thingslorem ispum
            Stranger Things
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Cards;
