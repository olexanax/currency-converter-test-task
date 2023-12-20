//styles
import { Container } from "./styles"
//images
import boy from "images/boy.gif"
//libs
import { motion } from 'framer-motion';

const animationVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    }
  },
};

const CvBlock = () => {
  return (
    <Container>
      <p >
        <span > Dear ITOP1000,</span>
        <br /> <br />
        if you liked my test task, here is a link to my CV in Google
        drive: <br />
        <br />
        <a
          rel="noreferrer"
          target="_blank"
          href="https://drive.google.com/file/d/1lk6r4HzwmxASrRzsbobk74RUr8_Ibim-/view?usp=drive_link"
        >
          click here
        </a>
      </p>
      <motion.img
        initial="hidden"
        whileInView="visible"
        variants={animationVariants}
        viewport={{ once: true, amount: 0.1 }}
        src={boy}
        alt="boy"
        className="sm:w-1/2 w-2/3 self-center" />
    </Container>
  )
}

export default CvBlock