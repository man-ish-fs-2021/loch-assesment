import Bell from "../../assets/icons/bell.svg";
import BellDark from "../../assets/icons/belldark.svg";
import Price from "../../assets/icons/Frame 427319219.svg";
import BarChart from "../../assets/icons/bar-chart-2.svg";
import Clock from "../../assets/icons/clock.svg";
import Time from "../../assets/icons/Frame 427319220.svg";
import {
  NotificationPresenter,
  Notification,
  TextWithIcon,
  InfiniteLooper,
} from "../../components";

const NotificationSection = () => {
  return (
    <div className=" w-full flex flex-col  gap-y-10 mb-16 items-center md:min-h-[305px] md:flex-row md:gap-x-10">
      <div className="w-full md:w-[50%]">
        <TextWithIcon
          icon={<img className="h-[32px]" src={BellDark} alt="bell-dark" />}
          mainText={
            <div className="text-[31px] font-medium drop-shadow-text">
              Get notified when a highly correlated whale makes a move
            </div>
          }
          className="text-white items-start"
          subText={
            <div className="font-500 text-[16px] text-sub">
              Find out when a certain whale moves more than any preset amount
              on-chain or when a dormant whale you care about becomes active.
            </div>
          }
        />
      </div>
      <div className="flex w-full gap-5 drop-shadow-side12 box-shadow-side md:w-[50%]">
        <InfiniteLooper speed={5} direction="left">
          <div className="flex  gap-5">
            <NotificationPresenter>
              <Notification
                icon={
                  <img className="w-[28px] h-[28px]" src={Bell} alt="bell" />
                }
                className="bg-notification-bg "
                content={
                  <div className="self-end mt-auto text-[14px] [&>*]:pt-1 w-full flex flex-col">
                    <div>We’ll be sending notifications to you here</div>
                    <div className="w-full">
                      <input className="h-[35px] rounded-[5.6px] border-[0.7px] border-neutral-300" />
                    </div>
                  </div>
                }
                right={
                  <button className="hover:bg-gray-100 text-black">Save</button>
                }
              />
            </NotificationPresenter>
            <NotificationPresenter>
              <Notification
                icon={
                  <img
                    className="w-[28px] h-[28px]"
                    src={BarChart}
                    alt="bell"
                  />
                }
                content={
                  <div className="self-end mt-auto [&>*]:pt-1">
                    <div className="text-[11.2px] font-medium">
                      Notify me when any wallets move more than
                    </div>
                    <div>
                      <img src={Price} alt="price" />
                    </div>
                  </div>
                }
                right={<input type="checkbox" checked />}
              />
            </NotificationPresenter>
            <NotificationPresenter>
              <Notification
                icon={
                  <img className="w-[28px] h-[28px]" src={Clock} alt="bell" />
                }
                content={
                  <div className="self-end mt-auto text-[11.2px] font-medium [&>*]:pt-1">
                    <div>Notify me when any wallet dormant for</div>
                    <div>
                      <img src={Time} alt="time" />
                    </div>
                    <div>becomes active</div>
                  </div>
                }
                right={<input type="checkbox" checked />}
              />
            </NotificationPresenter>
          </div>
        </InfiniteLooper>
      </div>
    </div>
  );
};

export default NotificationSection;
