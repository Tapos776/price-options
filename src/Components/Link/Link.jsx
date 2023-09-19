const Link = ({route}) => {
    return (
        <li className="text-2xl font-medium hover:bg-white  rounded-lg px-20 py-2 md:p-10 " ><a href={route.path}>{route.name}</a></li>
    );
};

export default Link;