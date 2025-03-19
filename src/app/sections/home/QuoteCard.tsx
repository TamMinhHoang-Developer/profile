import { motion } from "framer-motion";

export default function QuoteCard() {
  return (
    <div className="w-full flex items-center justify-center relative">
      <div className="w-fit">
        <div className="border border-[var(--cadet-blue-crayola)] p-[var(--larged-gap)] relative textsize--24 text-pretty">
          With great power comes great electricity bill
          <div className="absolute -top-3.5 left-2">
            <svg
              width="42"
              height="29"
              viewBox="0 0 42 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="41.472" height="28.704" fill="#282C33" />
              <path
                d="M18.56 19.616C18.56 21.0453 18.0373 22.2507 16.992 23.232C15.968 24.2133 14.72 24.704 13.248 24.704C11.7333 24.704 10.4747 24.2133 9.472 23.232C8.49067 22.2507 8 21.0453 8 19.616C8 18.9333 8.096 18.208 8.288 17.44C8.48 16.672 8.864 15.68 9.44 14.464L14.4 4H19.2L16.544 15.584C17.1413 16.0107 17.6213 16.576 17.984 17.28C18.368 17.9627 18.56 18.7413 18.56 19.616ZM32.8 19.616C32.8 21.0453 32.2773 22.2507 31.232 23.232C30.1867 24.2133 28.9387 24.704 27.488 24.704C26.016 24.704 24.768 24.2133 23.744 23.232C22.7413 22.2507 22.24 21.0453 22.24 19.616C22.24 18.9333 22.336 18.208 22.528 17.44C22.72 16.672 23.1147 15.68 23.712 14.464L28.704 4H33.472L30.784 15.584C31.4027 16.0107 31.8933 16.576 32.256 17.28C32.6187 17.9627 32.8 18.7413 32.8 19.616Z"
                fill="#ABB2BF"
              />
            </svg>
          </div>
          <div className="absolute right-3.5 -bottom-4">
            <svg
              width="42"
              height="29"
              viewBox="0 0 42 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="41.472" height="28.704" fill="#282C33" />
              <path
                d="M18.56 19.616C18.56 21.0453 18.0373 22.2507 16.992 23.232C15.968 24.2133 14.72 24.704 13.248 24.704C11.7333 24.704 10.4747 24.2133 9.472 23.232C8.49067 22.2507 8 21.0453 8 19.616C8 18.9333 8.096 18.208 8.288 17.44C8.48 16.672 8.864 15.68 9.44 14.464L14.4 4H19.2L16.544 15.584C17.1413 16.0107 17.6213 16.576 17.984 17.28C18.368 17.9627 18.56 18.7413 18.56 19.616ZM32.8 19.616C32.8 21.0453 32.2773 22.2507 31.232 23.232C30.1867 24.2133 28.9387 24.704 27.488 24.704C26.016 24.704 24.768 24.2133 23.744 23.232C22.7413 22.2507 22.24 21.0453 22.24 19.616C22.24 18.9333 22.336 18.208 22.528 17.44C22.72 16.672 23.1147 15.68 23.712 14.464L28.704 4H33.472L30.784 15.584C31.4027 16.0107 31.8933 16.576 32.256 17.28C32.6187 17.9627 32.8 18.7413 32.8 19.616Z"
                fill="#ABB2BF"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-end w-full justify-center xl:justify-end ">
          <div className="border border-[var(--cadet-blue-crayola)] p-[var(--16-gap)] w-fit border-t-0 textsize--24">
            - Dr. Tam
          </div>
        </div>
      </div>

      <div className="absolute top-12 -right-48 xl:block hidden">
        <motion.div
          animate={{
            x: [-20, 20, -20], // Di chuyển qua trái (-20px) → phải (20px) → trái (-20px)
          }}
          transition={{
            duration: 1.5, // Thời gian cho 1 chu kỳ
            repeat: Infinity, // Lặp vô hạn
            ease: "easeInOut", // Hiệu ứng mượt
          }}
        >
          <svg
            width="91"
            height="91"
            viewBox="0 0 91 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y="0.5" width="90" height="90" stroke="#ABB2BF" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
