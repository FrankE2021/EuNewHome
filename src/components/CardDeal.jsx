import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Estamos radicados principalmente <br className="sm:block hidden" /> en Cuba, Brazil y España.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Sin embargo tenemos clientes de todas partes del mundo, que nos permiten abarcar una red de contactos de gran diversidad y multilingue.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
