import useAuth from "../../../hooks/useAuth";

const Avatar = () => {
  const { user } = useAuth();
  console.log(user, "Avatar.jsx", 5);

  const img =
    user?.photoURL ||
    "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp";
  return (
    <div className="avatar" title={user?.displayName}>
      <div className="ring-primary ring-offset-base-100 w-7 rounded-full ring-2 ring-offset-2">
        <img src={img} alt="avatar" className="w-full rounded-full" />
      </div>
    </div>
  );
};

export default Avatar;
