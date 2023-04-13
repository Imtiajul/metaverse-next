import styles from '../styles';

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div className={`${styles.flexCenter} h-[70px] w-[70px] rounded-[24px] bg-[#323f5d]`}>
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h4 className="font-bold text-[22px] text-white mt-[26px] leading-[30px]">Title {title}</h4>
    <p className="mt-[16px]  font-normal text-lg leading-8 text-[#b0b0b0]">{subtitle}</p>
  </div>
);

export default NewFeatures;
