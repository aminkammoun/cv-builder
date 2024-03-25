import React from 'react'
import { Input } from "@material-tailwind/react";
export const Index = () => {
  /*const [padding, setPadding] = useState(2); // Initial padding value is 2
  const handleChange = (e) => {
    setPadding(parseFloat(e.target.value));
  };
  useEffect(() => {
    console.log('Updated padding:', padding);
  }, [padding])*/
  return (
    <div>
      
      <div className="w-72">
      <Input label="Username" crossOrigin={undefined} />
    </div>
    </div>
  );
}

export default Index