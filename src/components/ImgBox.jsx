import { premium } from "../assets";
import styles, { layout } from "../style";

const ImgBox = () => (
  <section id="plan-box" className={`${styles.flexCenter} p-8 mb-5 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className={layout.sectionImgReverse}>
      <img src={premium} alt="premium" className="mb-3 w-[100%] h-[100%] relative z-[5] rounded-[20px]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Amplia variedad <br className="sm:block hidden" />de pagos en diversas plataformas
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Aceptamos pagos a nivel mundial, desde cuentas bancarias internacionales o locales, hasta cryptomonedas.
      </p>
    </div>
  </section>
);

export default ImgBox;
