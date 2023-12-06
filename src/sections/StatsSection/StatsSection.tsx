// import stats from "../../assets/icons/Cohorts 3.png";
import EyeDark from "../../assets/icons/EyeDark.svg";
import { TextWithIcon } from "../../components";

const StatsSection = () => {
  return (
    <div className="w-full flex gap-x-10 items-center pr-16 ">
      <div className="w-[50%]">
        <img className="self-start rounded-[12px] border-[1.5px] border-[rgba(255, 255, 255, 68%)]" src='https://s3-alpha-sig.figma.com/img/a837/e66b/317b128c03dcf7840ae72269ac076405?Expires=1702857600&Signature=kIxbN1guxEYYegk4iHEUe46UCJDGqoZFmlsJwf9vHhCy09sudBRHLWZ7RPmTXUOiqc3ja2izqv04NdNjzIRU0X85sxxDnB~5fhkwPu6WooFRwvL931ATDMT4ccSoDSAMGHkvhd7oQCnZY4h4bTf7SIh60mpOf4rNW9dBbRlMl5j9RV76ClSdfJk0H~bzijk1g9nPvyJGXgkdkXfQSoXsNkxrXzQ7ZHJRIh~MHQeMMC~ksP2rx6qQI4SFZ7qBtQqhYSBVUyRjhAMXf4tj4sTc3kDdukplwYvNSQgpqNJASdc1Nww6SqanbSna~bjDvOATWXIpzPrOFgFgzrhhGajfuA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt="stats" />
      </div>
      <div className="w-[50%]">
        <TextWithIcon
          icon={<img className="h-[32px] " src={EyeDark} alt="bell-dark" />}
          mainText={
            <div className="text-[31px] font-medium drop-shadow-text text-right">
              Watch what the whales are doing
            </div>
          }
          className="text-white items-end "
          subText={
            <div className="font-500 text-[16px] text-sub text-right">
              All whales are not equal. Know exactly what the whales impacting
              YOUR portfolio are doing.
            </div>
          }
        />
      </div>
    </div>
  );
};

export default StatsSection;
