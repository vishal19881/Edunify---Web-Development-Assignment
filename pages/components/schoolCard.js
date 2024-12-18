import Image from "next/image";
const SchoolCard = ({
  name,
  address,
  city,
  contact,
  email_id,
  image,
  state,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm w-[360px] h-[480px]">
      <div className="relative">
        <Image
          className="w-full h-56 object-cover object-center"
          src={`/schoolImages/${image}`}
          alt="School Image"
          width={105}
          height={224}
        />
      </div>
      <div className="p-4">
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">School:</span> {name}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Address:</span> {address}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">City:</span> {city}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">State:</span> {state}
        </p>
        <div className="text-gray-700">
          <span className="font-semibold">Contact:</span>
          <p>Phone no.: {contact}</p>
          <p>Email Id: {email_id}</p>
        </div>
      </div>
    </div>
  );
};

export default SchoolCard;
