import {
  Subititle1,
  Icon,
  CategoryBadge,
  Rating,
  IconBadge,
  Subtitle2,
  Inter,
  HotelImage,
} from "./TypoGraphy";
import { Caption } from "caption";
import { PrimaryButton } from "primary-button";
import "./App.css";

function App() {
  return (
    <div className="App md:justify-center flex">
      <div className="p-l text-left lg:flex">
        <div className="relative md:mr-xl">
          <HotelImage
            src="https://images.oyoroomscdn.com/uploads/hotel_image/113667/medium/16ca7ff2bac75f5d.JPG"
            Multiplesrc={[
              "https://images.oyoroomscdn.com/uploads/hotel_image/112624/medium/da7d592521f80a71.jpg",
              "https://images.oyoroomscdn.com/uploads/hotel_image/112624/medium/9b09939f6cd57acb.jpg",
              "https://images.oyoroomscdn.com/uploads/hotel_image/112624/medium/ae1d75e9d96e4c42.jpg",
              "https://images.oyoroomscdn.com/uploads/hotel_image/112624/medium/154511f7e7d8726a.jpg",
              "https://images.oyoroomscdn.com/uploads/hotel_image/112624/medium/9d259e48c918471a.jpg",
            ]}
          />
          <CategoryBadge className="absolute top-m left-m">
            Townhouse
          </CategoryBadge>
        </div>
        <div>
          <div className="flex mt-m items-center">
            <Rating />
            <IconBadge className="ml-m" icon="check">
              Wizard
            </IconBadge>
            <IconBadge className="ml-m" icon="check">
              Vaccinated staff
            </IconBadge>
          </div>
          <Subititle1 className="mt-m text-amber-darker">
            OYO townhouse 057 Gujranwala Town
          </Subititle1>
          <Caption className="mt-s">2.4km · Vikaspuri, Delhi</Caption>
          <Subtitle2 className="mt-m text-crimson">
            <Icon icon="bolt" className="mr-s" />
            900+ people booked this OYO in last 6 months
          </Subtitle2>
          <Subtitle2 className="mt-m text-lavender">
            <Icon icon="snowflake-o" className="mr-s" />
            Room Sizes are 20% bigger than average
          </Subtitle2>
          <Caption className="mt-m">
            ₹3,600 total for 3 nights, 1 deluxe room
          </Caption>
          <div className="mt-s flex items-center">
            No caption in this version
          </div>
          <PrimaryButton className=" mt-m">Book Now</PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default App;