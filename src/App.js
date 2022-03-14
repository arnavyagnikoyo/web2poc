import { Subititle1, Caption, PrimaryButton, Icon } from "./TypoGraphy";
import MyCaption from "oyocaption/caption/src/App";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="p-l max-w-[200px]">
        <div className="flex justify-between mb-l flex-col-reverse mrcCard">
          <div className="text-left">
            <Subititle1 className="mb-s" bold>
              Saver double (X)
            </Subititle1>
            <Caption className="text-amber-darker mb-s">
              Spaces with functional amenities
            </Caption>
            <Caption className="text-amber-dd mb-m">1,200 sq. ft.</Caption>

            <div className="flex">
              <Icon icon="car" />
              <Icon icon="coffee" />
              <Icon icon="wifi" />
              <Caption className="text-asphalt-dd">+16 more</Caption>
            </div>

            <div className="flex mt-l items-center">
              <Subititle1 bold className="mr-m">
                $986
              </Subititle1>
              <Caption className="text-amber-dark line-through">$1926</Caption>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1640622308069-4352d9b4dcc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=112&h=112&q=80"
            alt=""
            className="rounded-lg mb-l"
          />
        </div>
        <PrimaryButton>Select</PrimaryButton>
        <MyCaption>Select</MyCaption>
      </div>
    </div>
  );
}

export default App;
