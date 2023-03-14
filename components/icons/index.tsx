"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const Moon = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <motion.path
        initial={{ opacity: 0, pathLength: 0, rotate: 40 }}
        animate={{ opacity: 1, pathLength: 1, rotate: 0 }}
        transition={{ duration: 0.5 }}
        d="M9.00068 19.0001C9.00068 19.8401 9.13068 20.6601 9.37068 21.4201C5.53068 20.0901 2.63068 16.5601 2.33068 12.4301C2.03068 8.04012 4.56068 3.94012 8.65068 2.22012C9.71068 1.78012 10.2507 2.10012 10.4807 2.33012C10.7007 2.55012 11.0107 3.08012 10.5707 4.09012C10.1207 5.13012 9.90068 6.23012 9.90068 7.37012C9.91068 9.41012 10.7107 11.3001 12.0107 12.7501C10.1807 14.2101 9.00068 16.4701 9.00068 19.0001Z"
        fill="#292D32"
      />
      <motion.path
        initial={{ opacity: 0, pathLength: 0, rotate: -40 }}
        animate={{ opacity: 0.4, pathLength: 1, rotate: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        d="M21.21 17.72C19.23 20.41 16.09 21.99 12.74 21.99C12.58 21.99 12.42 21.98 12.26 21.97C11.26 21.93 10.29 21.74 9.37 21.42C9.13 20.66 9 19.84 9 19C9 16.47 10.18 14.21 12.01 12.75C13.48 14.4 15.59 15.47 17.92 15.57C18.55 15.6 19.18 15.55 19.8 15.44C20.92 15.24 21.37 15.66 21.53 15.93C21.7 16.2 21.88 16.79 21.21 17.72Z"
        fill="#292D32"
      />
    </motion.svg>
  );
};

const LightBlob = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        d="M20.7807 14.18V17.12C20.7807 18.22 19.8807 19.12 18.7807 19.12H5.2207C4.1207 19.12 3.2207 18.22 3.2207 17.12V14.18C3.2207 9.35998 7.1207 5.45998 11.9407 5.45998H12.0607C16.8807 5.44998 20.7807 9.35998 20.7807 14.18Z"
        fill="#A1A1A6"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        d="M12.75 2.53003V5.49003C12.52 5.47003 12.29 5.46003 12.06 5.46003H11.94C11.71 5.46003 11.48 5.47003 11.25 5.49003V2.53003C11.25 2.12003 11.59 1.78003 12 1.78003C12.41 1.78003 12.75 2.12003 12.75 2.53003Z"
        fill="#A1A1A6"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        d="M15.3197 19.1101C15.1997 20.8501 13.7597 22.2201 11.9997 22.2201C10.2397 22.2201 8.78969 20.8501 8.67969 19.1101H15.3197Z"
        fill="#A1A1A6"
      />
    </motion.svg>
  );
};

const Menu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <motion.path
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          rotate: isOpen ? -45 : 0,
          scale: isOpen ? 1.7 : 1.3,
        }}
        transition={{ duration: 0.2 }}
        d="M16.1497 12.8299L14.4197 13.4099C13.9397 13.5699 13.5697 13.9399 13.4097 14.4199L12.8297 16.1499C12.3397 17.6399 10.2397 17.6099 9.7797 16.1199L7.8297 9.83988C7.4497 8.58988 8.5997 7.43989 9.8297 7.81989L16.1197 9.76987C17.6097 10.2399 17.6297 12.3399 16.1497 12.8299Z"
        className="fill-text-primary-light dark:fill-text-primary-dark"
      />
    </svg>
  );
};

const Message = () => {
  return (
    <motion.svg
      whileHover={{
        rotateY: 30,
        scale: 1.1,
      }}
      className="w-8 h-8"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7 18.4302H11L15.45 21.3902C16.11 21.8302 17 21.3602 17 20.5602V18.4302C20 18.4302 22 16.4302 22 13.4302V7.43018C22 4.43018 20 2.43018 17 2.43018H7C4 2.43018 2 4.43018 2 7.43018V13.4302C2 16.4302 4 18.4302 7 18.4302Z"
        className="fill-text-primary-light/10 dark:fill-text-primary-dark/10"
      />
      <path
        d="M15.5 11.25H8.5C8.09 11.25 7.75 10.91 7.75 10.5C7.75 10.09 8.09 9.75 8.5 9.75H15.5C15.91 9.75 16.25 10.09 16.25 10.5C16.25 10.91 15.91 11.25 15.5 11.25Z"
        className="fill-text-primary-light dark:fill-text-primary-dark"
      />
    </motion.svg>
  );
};

const Resume = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
        className="fill-text-primary-light dark:fill-text-primary-dark"
      />
      <path
        opacity="0.4"
        d="M19 9.5C16.52 9.5 14.5 7.48 14.5 5C14.5 4.28 14.69 3.61 14.99 3H7.52C4.07 3 2 5.06 2 8.52V16.47C2 19.94 4.07 22 7.52 22H15.47C18.93 22 20.99 19.94 20.99 16.48V9.01C20.39 9.31 19.72 9.5 19 9.5Z"
        className="fill-text-primary-light/20 dark:fill-text-primary-dark/20"
      />
      <path
        d="M11.75 14H6.75C6.34 14 6 13.66 6 13.25C6 12.84 6.34 12.5 6.75 12.5H11.75C12.16 12.5 12.5 12.84 12.5 13.25C12.5 13.66 12.16 14 11.75 14Z"
        className="fill-text-primary-light dark:fill-text-primary-dark"
      />
      <path
        d="M15.75 18H6.75C6.34 18 6 17.66 6 17.25C6 16.84 6.34 16.5 6.75 16.5H15.75C16.16 16.5 16.5 16.84 16.5 17.25C16.5 17.66 16.16 18 15.75 18Z"
        className="fill-text-primary-light dark:fill-text-primary-dark"
      />
    </svg>
  );
};

const Home = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10.0693 2.8201L3.13929 8.37009C2.35929 8.99009 1.85929 10.3001 2.02929 11.2801L3.35929 19.2401C3.59929 20.6601 4.95928 21.8101 6.39928 21.8101H17.5993C19.0293 21.8101 20.3993 20.6501 20.6393 19.2401L21.9693 11.2801C22.1293 10.3001 21.6293 8.99009 20.8593 8.37009L13.9293 2.83008C12.8593 1.97008 11.1293 1.9701 10.0693 2.8201Z"
        className="fill-text-primary-light/20 dark:fill-text-primary-dark/20"
      />
      <path
        d="M12 15.5C13.3807 15.5 14.5 14.3807 14.5 13C14.5 11.6193 13.3807 10.5 12 10.5C10.6193 10.5 9.5 11.6193 9.5 13C9.5 14.3807 10.6193 15.5 12 15.5Z"
        className="fill-text-primary-light dark:fill-text-primary-dark"
      />
    </svg>
  );
};

const Blog = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.6602 10.44L20.6802 14.62C19.8402 18.23 18.1802 19.69 15.0602 19.39C14.5602 19.35 14.0202 19.26 13.4402 19.12L11.7602 18.72C7.59018 17.73 6.30018 15.67 7.28018 11.49L8.26018 7.30001C8.46018 6.45001 8.70018 5.71001 9.00018 5.10001C10.1702 2.68001 12.1602 2.03001 15.5002 2.82001L17.1702 3.21001C21.3602 4.19001 22.6402 6.26001 21.6602 10.44Z"
        className="fill-text-primary-light/20 dark:fill-text-primary-dark/20"
      />
      <path
        d="M15.0603 19.3901C14.4403 19.8101 13.6603 20.1601 12.7103 20.4701L11.1303 20.9901C7.16034 22.2701 5.07034 21.2001 3.78034 17.2301L2.50034 13.2801C1.22034 9.3101 2.28034 7.2101 6.25034 5.9301L7.83034 5.4101C8.24034 5.2801 8.63034 5.1701 9.00034 5.1001C8.70034 5.7101 8.46034 6.4501 8.26034 7.3001L7.28034 11.4901C6.30034 15.6701 7.59034 17.7301 11.7603 18.7201L13.4403 19.1201C14.0203 19.2601 14.5603 19.3501 15.0603 19.3901Z"
        className="fill-text-primary-light dark:fill-text-primary-dark"
      />
      <path
        d="M17.4894 10.51C17.4294 10.51 17.3694 10.5 17.2994 10.49L12.4494 9.26002C12.0494 9.16002 11.8094 8.75002 11.9094 8.35002C12.0094 7.95002 12.4194 7.71002 12.8194 7.81002L17.6694 9.04002C18.0694 9.14002 18.3094 9.55002 18.2094 9.95002C18.1294 10.28 17.8194 10.51 17.4894 10.51Z"
        className="fill-text-primary-light dark:fill-text-primary-dark"
      />
      <path
        d="M14.5592 13.8899C14.4992 13.8899 14.4392 13.8799 14.3692 13.8699L11.4592 13.1299C11.0592 13.0299 10.8192 12.6199 10.9192 12.2199C11.0192 11.8199 11.4292 11.5799 11.8292 11.6799L14.7392 12.4199C15.1392 12.5199 15.3792 12.9299 15.2792 13.3299C15.1992 13.6699 14.8992 13.8899 14.5592 13.8899Z"
        className="fill-text-primary-light dark:fill-text-primary-dark"
      />
    </svg>
  );
};

const Design = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.4707 5V19C21.4707 20.66 20.1207 22 18.4707 22H14.4707C12.8107 22 11.4707 20.66 11.4707 19V5C11.4707 3.34 12.8107 2 14.4707 2H18.4707C20.1207 2 21.4707 3.34 21.4707 5Z"
        className="fill-text-primary-light/20 dark:fill-text-primary-dark/20"
      />
      <path
        d="M17.2207 6C17.2207 6.41 16.8807 6.75 16.4707 6.75H11.4707V5.25H16.4707C16.8807 5.25 17.2207 5.59 17.2207 6Z"
        className="fill-text-primary-light dark:fill-text-primary-dark"
      />
      <path
        d="M16.1207 18C16.1207 18.41 15.7907 18.75 15.3707 18.75H11.4707V17.25H15.3707C15.7907 17.25 16.1207 17.59 16.1207 18Z"
        className="fill-text-primary-light dark:fill-text-primary-dark"
      />
      <path
        d="M17.2207 14.0102C17.2107 14.4202 16.8807 14.7502 16.4707 14.7502C16.4607 14.7502 16.4607 14.7502 16.4607 14.7502L11.4707 14.7002V13.2002L16.4707 13.2502C16.8907 13.2502 17.2207 13.5902 17.2207 14.0102Z"
        className="fill-text-primary-light dark:fill-text-primary-dark"
      />
      <path
        d="M15.0307 10C15.0307 10.41 14.6907 10.75 14.2807 10.75H11.4707V9.25H14.2807C14.6907 9.25 15.0307 9.59 15.0307 10Z"
        className="fill-text-primary-light dark:fill-text-primary-dark"
      />
      <path
        d="M8.4393 4.95V17.91C8.4393 18.36 8.2493 19.05 8.0193 19.43L7.1993 20.79C6.2593 22.37 4.7193 22.37 3.7693 20.79L2.9593 19.43C2.7193 19.05 2.5293 18.36 2.5293 17.91V4.95C2.5293 3.33 3.8593 2 5.4893 2C7.1093 2 8.4393 3.33 8.4393 4.95Z"
        className="fill-text-primary-light/20 dark:fill-text-primary-dark/20"
      />
      <path
        d="M8.4393 6.25H2.5293V7.75H8.4393V6.25Z"
        className="fill-text-primary-light dark:fill-text-primary-dark"
      />
    </svg>
  );
};

const Backend = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
        className="fill-text-primary-light/20 dark:fill-text-primary-dark/20"
      />
      <path
        d="M6.89088 15.75C6.61088 15.75 6.35088 15.6 6.22088 15.34C6.03088 14.97 6.18088 14.52 6.56088 14.33C7.43088 13.9 8.17088 13.24 8.70088 12.44C8.88088 12.17 8.88088 11.83 8.70088 11.56C8.16088 10.76 7.42088 10.1 6.56088 9.67002C6.18088 9.49002 6.03088 9.04002 6.22088 8.66002C6.40088 8.29002 6.85088 8.14002 7.22088 8.33002C8.32088 8.88002 9.26088 9.71002 9.94088 10.73C10.4509 11.5 10.4509 12.5 9.94088 13.27C9.26088 14.29 8.32088 15.12 7.22088 15.67C7.12088 15.72 7.00088 15.75 6.89088 15.75Z"
        className="fill-text-primary-light dark:fill-text-primary-dark"
      />
      <path
        d="M17 15.75H13C12.59 15.75 12.25 15.41 12.25 15C12.25 14.59 12.59 14.25 13 14.25H17C17.41 14.25 17.75 14.59 17.75 15C17.75 15.41 17.41 15.75 17 15.75Z"
        className="fill-text-primary-light dark:fill-text-primary-dark"
      />
    </svg>
  );
};

const Frontend = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15.4798 2H7.52977C4.06977 2 2.00977 4.05999 2.00977 7.51999V15.47C2.00977 18.93 4.07977 20.99 7.52977 20.99H15.4798C18.9398 20.99 20.9998 18.93 20.9998 15.47V7.51999C20.9998 4.05999 18.9298 2 15.4798 2Z"
        className="fill-text-primary-light/20 dark:fill-text-primary-dark/20"
      />
      <path
        d="M21.9597 18.84L20.3297 19.39C19.8797 19.54 19.5197 19.89 19.3697 20.35L18.8197 21.98C18.3497 23.39 16.3697 23.36 15.9297 21.95L14.0797 16C13.7197 14.82 14.8097 13.72 15.9797 14.09L21.9397 15.94C23.3397 16.38 23.3597 18.37 21.9597 18.84Z"
        className="fill-text-primary-light dark:fill-text-primary-dark"
      />
    </svg>
  );
};

const Code = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
        className="fill-text-primary-light/20 dark:fill-text-primary-dark/20"
      />
      <path
        d="M18.5 9.25H16.5C14.98 9.25 13.75 8.02 13.75 6.5V4.5C13.75 4.09 14.09 3.75 14.5 3.75C14.91 3.75 15.25 4.09 15.25 4.5V6.5C15.25 7.19 15.81 7.75 16.5 7.75H18.5C18.91 7.75 19.25 8.09 19.25 8.5C19.25 8.91 18.91 9.25 18.5 9.25Z"
        className="fill-text-primary-light dark:fill-text-primary-dark"
      />
      <path
        d="M9.99945 17.75C9.80945 17.75 9.61945 17.68 9.46945 17.53L7.46945 15.53C7.17945 15.24 7.17945 14.7599 7.46945 14.4699L9.46945 12.4699C9.75945 12.1799 10.2395 12.1799 10.5295 12.4699C10.8195 12.7599 10.8195 13.24 10.5295 13.53L9.05945 15L10.5295 16.4699C10.8195 16.7599 10.8195 17.24 10.5295 17.53C10.3795 17.68 10.1895 17.75 9.99945 17.75Z"
        className="fill-text-primary-light dark:fill-text-primary-dark"
      />
      <path
        d="M13.9995 17.75C13.8095 17.75 13.6195 17.68 13.4695 17.53C13.1795 17.24 13.1795 16.7599 13.4695 16.4699L14.9395 15L13.4695 13.53C13.1795 13.24 13.1795 12.7599 13.4695 12.4699C13.7595 12.1799 14.2395 12.1799 14.5295 12.4699L16.5295 14.4699C16.8195 14.7599 16.8195 15.24 16.5295 15.53L14.5295 17.53C14.3795 17.68 14.1895 17.75 13.9995 17.75Z"
        className="fill-text-primary-light dark:fill-text-primary-dark"
      />
    </svg>
  );
};

const Package = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.0409 7.19L12.0009 12.42L2.96094 7.19C3.36094 6.45 3.94094 5.8 4.59094 5.44L9.93094 2.48C11.0709 1.84 12.9309 1.84 14.0709 2.48L19.4109 5.44C20.0609 5.8 20.6409 6.45 21.0409 7.19Z"
        className="fill-text-primary-light/20 dark:fill-text-primary-dark/20"
      />
      <path
        d="M12.0006 12.4199V21.9999C11.2506 21.9999 10.5006 21.8399 9.93062 21.5199L4.59063 18.5599C3.38063 17.8899 2.39062 16.2099 2.39062 14.8299V9.16994C2.39062 8.52994 2.61062 7.82994 2.96062 7.18994L12.0006 12.4199Z"
        className="fill-text-primary-light/40 dark:fill-text-primary-dark/40"
      />
      <path
        d="M21.61 9.16994V14.8299C21.61 16.2099 20.62 17.8899 19.41 18.5599L14.07 21.5199C13.5 21.8399 12.75 21.9999 12 21.9999V12.4199L21.04 7.18994C21.39 7.82994 21.61 8.52994 21.61 9.16994Z"
        className="fill-text-primary-light dark:fill-text-primary-dark"
      />
    </svg>
  );
};

const Link = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.6897 11.5298C18.1197 11.3798 17.4497 11.2998 16.6497 11.2998C15.5397 11.2998 15.1297 11.5698 14.5597 11.9998C14.5297 12.0198 14.4997 12.0498 14.4697 12.0798L13.5197 13.0898C12.7297 13.9398 11.2797 13.9398 10.4797 13.0898L9.52969 12.0898C9.49969 12.0498 9.46969 12.0198 9.43969 11.9998C8.85969 11.5698 8.44969 11.2998 7.34969 11.2998C6.54969 11.2998 5.87969 11.3698 5.30969 11.5298C2.92969 12.1698 2.92969 14.0598 2.92969 15.7198V16.6498C2.92969 19.1598 2.92969 21.9998 8.27969 21.9998H15.7197C19.2697 21.9998 21.0697 20.1998 21.0697 16.6498V15.7198C21.0697 14.0598 21.0697 12.1698 18.6897 11.5298Z"
        className="fill-text-primary-light dark:fill-text-primary-dark"
      />
      <path
        d="M14.7891 2H9.20906C4.78906 2 4.78906 4.35 4.78906 6.42V12.21C4.78906 12.43 4.88906 12.63 5.05906 12.76C5.22906 12.89 5.45906 12.94 5.66906 12.88C6.11906 12.76 6.67906 12.7 7.34906 12.7C8.01906 12.7 8.15906 12.78 8.55906 13.08L9.46906 14.04C10.1191 14.74 11.0491 15.14 12.0091 15.14C12.9691 15.14 13.8891 14.74 14.5491 14.04L15.4591 13.08C15.8591 12.78 15.9991 12.7 16.6691 12.7C17.3391 12.7 17.8991 12.76 18.3491 12.88C18.5591 12.94 18.7791 12.89 18.9591 12.76C19.1291 12.63 19.2291 12.42 19.2291 12.21V6.42C19.2091 4.35 19.2091 2 14.7891 2Z"
        className="fill-text-primary-light/20 dark:fill-text-primary-dark/20"
      />
      <path
        d="M13.55 9.90977H10.45C10.06 9.90977 9.75 9.59977 9.75 9.20977C9.75 8.81977 10.06 8.50977 10.45 8.50977H13.55C13.94 8.50977 14.25 8.81977 14.25 9.20977C14.25 9.58977 13.93 9.90977 13.55 9.90977Z"
        className="fill-text-primary-light dark:fill-text-primary-dark"
      />
      <path
        d="M14.3307 7.12021H9.6707C9.2807 7.12021 8.9707 6.81022 8.9707 6.42022C8.9707 6.03022 9.2807 5.72021 9.6707 5.72021H14.3207C14.7107 5.72021 15.0207 6.03022 15.0207 6.42022C15.0207 6.80022 14.7107 7.12021 14.3307 7.12021Z"
        className="fill-text-primary-light dark:fill-text-primary-dark"
      />
    </svg>
  );
};

const Linkedin = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 fill-bg-secondary-light dark:fill-bg-secondary-dark"
      viewBox="0 0 256 256"
    >
      <path
        d="M220,44V212a7.99993,7.99993,0,0,1-8,8H44a7.99993,7.99993,0,0,1-8-8V44a7.99993,7.99993,0,0,1,8-8H212A7.99993,7.99993,0,0,1,220,44Z"
        className="fill-text-primary-light/20 dark:fill-text-primary-dark/20"
        stroke-width="1"
      />
      <path
        className="fill-text-primary-light dark:fill-text-primary-dark"
        d="M96,112.001v64a8,8,0,1,1-16,0v-64a8,8,0,0,1,16,0ZM88,68a12,12,0,1,0,12,12A12,12,0,0,0,88,68ZM228,44V212a16.01833,16.01833,0,0,1-16,16H44a16.01833,16.01833,0,0,1-16-16V44A16.01817,16.01817,0,0,1,44,28H212A16.01817,16.01817,0,0,1,228,44ZM212.00977,211.99951,212,44H44V212H212ZM148,104.001a35.79157,35.79157,0,0,0-20.20508,6.22143A7.99729,7.99729,0,0,0,112,112.001v64a8,8,0,1,0,16,0v-36a20,20,0,0,1,40,0v36a8,8,0,1,0,16,0v-36A36.04061,36.04061,0,0,0,148,104.001Z"
        stroke-width="1"
      />
    </svg>
  );
};

const Twitter = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 fill-bg-secondary-light dark:fill-bg-secondary-dark"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7.91 20.889c8.302 0 12.845-6.885 12.845-12.845 0-.193 0-.387-.009-.58A9.197 9.197 0 0 0 23 5.121a9.15 9.15 0 0 1-2.597.713 4.542 4.542 0 0 0 1.99-2.5 8.98 8.98 0 0 1-2.87 1.091A4.506 4.506 0 0 0 16.23 3a4.52 4.52 0 0 0-4.516 4.516c0 .352.044.696.114 1.03-3.75-.185-7.078-1.99-9.305-4.718a4.526 4.526 0 0 0 1.4 6.03 4.566 4.566 0 0 1-2.043-.563v.061A4.524 4.524 0 0 0 5.5 13.784a4.399 4.399 0 0 1-1.189.159c-.29 0-.572-.027-.845-.08a4.514 4.514 0 0 0 4.217 3.135 9.054 9.054 0 0 1-5.608 1.936A8.69 8.69 0 0 1 1 18.873a12.841 12.841 0 0 0 6.91 2.016Z"
        className="fill-text-primary-light dark:fill-text-primary-dark stroke-text-primary-light dark:stroke-text-primary-dark"
        fill-opacity=".16"
        stroke-width="1"
        stroke-miterlimit="10"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const Github = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 3C4.5885 3 3 4.5885 3 12C3 19.4115 4.5885 21 12 21C19.4115 21 21 19.4115 21 12C21 4.5885 19.4115 3 12 3ZM14.2695 9.03471C15.1872 8.34452 15.7204 8.25293 15.9299 8.25017C16.1326 8.86788 16.1588 9.54654 16.0042 10.1835C15.9945 10.2234 15.9842 10.263 15.9731 10.3025C15.941 10.4168 15.9647 10.5393 16.0366 10.6333L16.0377 10.6347C16.0521 10.6537 16.0664 10.6728 16.0805 10.6922C16.5194 11.2949 16.7603 12.0687 16.7497 12.8714L16.7496 12.8747C16.7496 14.5738 16.3076 15.5644 15.6994 16.1583C15.0859 16.7572 14.2627 16.9938 13.4137 17.0968L13.3898 17.0997L13.3777 17.1014C12.443 17.2601 11.5456 17.2688 10.6078 17.1286L10.604 17.1281L10.5687 17.1233C9.72415 17.0085 8.90483 16.7616 8.29455 16.1566C7.68912 15.5564 7.25036 14.5643 7.25038 12.8747L7.25034 12.8714C7.23972 12.0687 7.48056 11.2949 7.91949 10.6922C7.93482 10.6711 7.9504 10.6503 7.96621 10.6297C8.03648 10.538 8.05962 10.4184 8.02812 10.3068L8.02599 10.2993C8.01523 10.2608 8.00513 10.2222 7.99569 10.1834C7.84087 9.54684 7.86561 8.86863 8.0659 8.25016C8.27679 8.2528 8.81228 8.34432 9.73045 9.03473C9.76619 9.0616 9.80249 9.08937 9.83937 9.11807C9.93139 9.19 10.0529 9.21205 10.1644 9.17703L10.1657 9.17661C10.2268 9.15768 10.2882 9.13972 10.3496 9.12272C11.4349 8.82255 12.5651 8.82255 13.6504 9.12272C13.7088 9.13888 13.7671 9.15592 13.8253 9.17382L13.8277 9.17457C13.9431 9.21015 14.0704 9.18836 14.1678 9.11252C14.2022 9.08578 14.2361 9.05985 14.2695 9.03471Z"
        className="fill-text-primary-light/20 dark:fill-text-primary-dark/20"
      />
      <path
        d="M13.717 8.88177C12.5881 8.56954 11.4119 8.56954 10.283 8.88177C10.2637 8.8871 10.2444 8.89254 10.2252 8.89808C10.1067 8.93218 9.97923 8.909 9.8807 8.83491V8.83491C8.69311 7.94193 8.07278 7.98181 7.91927 8.01161V8.01161C7.8946 8.0164 7.87585 8.03481 7.86732 8.05844C7.86516 8.06441 7.86303 8.07038 7.8609 8.07636C7.61639 8.76505 7.57904 9.52813 7.75277 10.2425C7.76289 10.2841 7.77371 10.3255 7.78525 10.3667C7.78601 10.3694 7.78677 10.3721 7.78753 10.3748C7.79754 10.4102 7.7902 10.4483 7.7678 10.4776V10.4776C7.75074 10.4998 7.73394 10.5223 7.71741 10.545C7.24479 11.1939 6.98907 12.0213 7.00036 12.8747C7.00036 16.3399 8.80396 17.1358 10.535 17.3711L10.5708 17.3758C11.5347 17.5199 12.4587 17.511 13.4195 17.3479L13.4438 17.345C15.1832 17.1339 16.9996 16.3587 16.9996 12.8747C17.0109 12.0213 16.7552 11.1939 16.2826 10.545C16.2674 10.5242 16.252 10.5035 16.2364 10.483C16.236 10.4825 16.2356 10.482 16.2352 10.4815C16.211 10.4498 16.203 10.4085 16.2138 10.3701V10.3701C16.2257 10.3277 16.2368 10.2852 16.2471 10.2425C16.421 9.52611 16.3815 8.76076 16.1329 8.07176C16.1313 8.06753 16.1298 8.06331 16.1283 8.05909C16.1195 8.03503 16.1004 8.01628 16.0752 8.01142V8.01142C15.921 7.98164 15.3041 7.94381 14.1193 8.83491V8.83491C14.0208 8.90896 13.8933 8.93197 13.7748 8.89804C13.7556 8.89252 13.7363 8.8871 13.717 8.88177Z"
        stroke-width="1"
        className="stroke-text-primary-light dark:stroke-text-primary-dark"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
        className="stroke-text-primary-light dark:stroke-text-primary-dark"
        stroke-width="1"
      />
    </svg>
  );
};

const Mail = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-12"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16.19 4H7.81C4.17 4 2 6.17 2 9.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V9.81C22 6.17 19.83 4 16.19 4Z"
        className="fill-text-primary-light/20 dark:fill-text-primary-dark/20"
      />
      <path
        d="M21.3 12.23H17.82C16.84 12.23 15.97 12.77 15.53 13.65L14.69 15.31C14.49 15.71 14.09 15.96 13.65 15.96H10.37C10.06 15.96 9.62 15.89 9.33 15.31L8.49 13.66C8.05 12.79 7.17 12.24 6.2 12.24H2.7C2.31 12.24 2 12.55 2 12.94V16.2C2 19.83 4.18 22 7.82 22H16.2C19.63 22 21.74 20.12 22 16.78V12.93C22 12.55 21.69 12.23 21.3 12.23Z"
        className="fill-text-primary-light dark:fill-text-primary-dark"
      />
      <path
        d="M14.5295 6.47C14.2395 6.18 13.7595 6.18 13.4695 6.47L12.7495 7.19V2C12.7495 1.59 12.4095 1.25 11.9995 1.25C11.5895 1.25 11.2495 1.59 11.2495 2V7.19L10.5295 6.47C10.2395 6.18 9.75945 6.18 9.46945 6.47C9.17945 6.76 9.17945 7.24 9.46945 7.53L11.4695 9.53C11.4795 9.54 11.4895 9.54 11.4895 9.55C11.5495 9.61 11.6295 9.66 11.7095 9.7C11.8095 9.73 11.8995 9.75 11.9995 9.75C12.0995 9.75 12.1895 9.73 12.2795 9.69C12.3695 9.65 12.4495 9.6 12.5295 9.53L14.5295 7.53C14.8195 7.24 14.8195 6.76 14.5295 6.47Z"
        className="fill-text-primary-light dark:fill-text-primary-dark"
      />
    </svg>
  );
};

const Heart = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-12"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        className="fill-text-secondary-light/20 dark:fill-text-secondary-dark/20"
      />
      <path
        d="M12.3296 16.9999C12.1496 17.0599 11.8396 17.0599 11.6596 16.9999C10.0996 16.4699 6.59961 14.2399 6.59961 10.4599C6.59961 8.78993 7.93961 7.43994 9.59961 7.43994C10.5796 7.43994 11.4496 7.90993 11.9996 8.64993C12.5396 7.91993 13.4196 7.43994 14.3996 7.43994C16.0596 7.43994 17.3996 8.78993 17.3996 10.4599C17.3996 14.2399 13.8996 16.4699 12.3296 16.9999Z"
        className="fill-red-500 dark:fill-red-500"
      />
    </svg>
  );
};

const CheckMark = () => {
  return (
    <motion.svg
      initial={{ scale: 0.5, opacity: 0.8 }}
      animate={{ scale: [1.4, 1], opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g id="style=bulk">
        <g id="check-circle">
          <path
            id="vector (Stroke)"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z"
            className="fill-text-secondary-light/20 dark:fill-text-secondary-dark/20"
          />
          <path
            id="vector (Stroke)_2"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.5303 8.96967C16.8232 9.26256 16.8232 9.73744 16.5303 10.0303L11.9041 14.6566C11.2207 15.34 10.1126 15.34 9.42923 14.6566L7.46967 12.697C7.17678 12.4041 7.17678 11.9292 7.46967 11.6363C7.76256 11.3434 8.23744 11.3434 8.53033 11.6363L10.4899 13.5959C10.5875 13.6935 10.7458 13.6935 10.8434 13.5959L15.4697 8.96967C15.7626 8.67678 16.2374 8.67678 16.5303 8.96967Z"
            className="fill-text-primary-light dark:fill-text-primary-dark"
          />
        </g>
      </g>
    </motion.svg>
  );
};

const Icons = {
  CheckMark,
  Heart,
  Mail,
  Moon,
  LightBlob,
  Menu,
  Message,
  Resume,
  Home,
  Blog,
  Backend,
  Frontend,
  Design,
  Package,
  Code,
  Link,
  Linkedin,
  Twitter,
  Github,
};

export default Icons;
