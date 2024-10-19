import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IconButton from "../../components/IconButton"
import Map from '../../components/Map'
import Gallery from "./Gallery";

const store = {
    currentUser:    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }
}

const UserProfile = () => {
    const { id } = useParams<{ id: string }>(); // Get the dynamic route param
    const [currentTab, setCurrentTab] = useState("All");

    const actionBtns = [
        {
            ariaLabel: "call",
            action: () => {
                window.location.href = `tel:`;
            },
            icon: "fas fa-phone",
        },
        {
            ariaLabel: "website",
            action: () => {
                // window.open(store.currentUser?.website, "_blank");
            },
            icon: "fas fa-globe",
        },
        {
            ariaLabel: "copy link",
            action: () => {
                navigator.clipboard.writeText(window.location.href + "/profile/" + id);
                alert("Link to profile copied");
            },
            icon: "fas fa-copy",
        },
    ];

    // useEffect(() => {
    //     const fetchProfile = async () => {
    //         if (id) {
    //             await store.getUser(parseInt(id));
    //         }
    //     };
    //     fetchProfile();
    // }, [id, store]);
    //
    // useEffect(() => {
    //     const fetchUserAlbums = async () => {
    //         await albumStore.fetchUserAlbums(id);
    //         await albumStore.fetchAlbums();
    //     };
    //
    //     if (currentTab === "All") {
    //         fetchUserAlbums();
    //     }
    // }, [currentTab, id, albumStore]);


    return (
        <div>
            <div className="flex justify-between py-4 space-x-10">
                <div className="flex flex-col items-center basis-1/4">
                    <img
                        width="200"
                        height="200"
                        className="rounded-full"
                        src="https://i.pravatar.cc/150?img=12"
                        alt="avatar"
                    />
                    <div className="flex mt-3 space-x-3 w-full justify-center">
                        {actionBtns.map((btn, ind) => (
                            <IconButton
                                key={ind}
                                icon={btn.icon}
                                onClick={btn.action}
                                aria-label={btn.ariaLabel}
                                type="button"
                            />
                        ))}
                    </div>
                </div>

                <div className="user-data flex flex-col space-y-3 basis-1/4">
                    <h3 className="text-2xl font-bold text-primary">User Information</h3>
                    <div>
                        <p className="uppercase font-semibold text-gray-400">Name</p>
                        <p className="text-lg leading-none font-bold text-primary underline">
                            <strong>{store.currentUser?.name}</strong>
                        </p>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <p className="uppercase font-semibold text-gray-400">Email</p>
                            <p className="text-lg leading-none">
                                <strong>{store.currentUser?.email}</strong>
                            </p>
                        </div>
                        <div>
                            <p className="uppercase font-semibold text-gray-400">Username</p>
                            <p className="text-lg leading-none">
                                <strong>{store.currentUser?.username}</strong>
                            </p>
                        </div>
                    </div>

                    <div>
                        <p className="uppercase font-semibold text-gray-400">Phone</p>
                        <a
                            href={`tel:${store.currentUser?.phone}`}
                            className="text-lg leading-none text-primary"
                        >
                            <strong>{store.currentUser?.phone}</strong>
                        </a>
                    </div>

                    <address className="text-lg">
                        <i className="fas fa-map-marker-alt inline"></i>{" "}
                        <span className="cursor-pointer font-semibold underline text-primary inline">
            {store.currentUser?.address.city}
          </span>
                        ,&nbsp;
                        <span className="font-semibold inline">
            {store.currentUser?.address.street}
          </span>
                    </address>
                    <Map
                        lat={store.currentUser?.address.geo.lat}
                        long={store.currentUser?.address.geo.lng}
                    />
                </div>

                <div className="company-info basis-1/2 justify-self-start">
                    <div className="w-full">
                        <h3 className="text-2xl font-bold text-primary">
                            Company Information
                        </h3>
                        <div className="mb-4">
                            <p className="text-lg uppercase font-semibold text-gray-400">
                                Company Name:
                            </p>
                            <p className="text-lg">{store.currentUser?.company.name}</p>
                        </div>

                        <div className="mb-4">
                            <p className="text-lg uppercase font-semibold text-gray-400">
                                Catch Phrase:
                            </p>
                            <p className="text-lg text-primary font-semibold">
                                {store.currentUser?.company.catchPhrase}
                            </p>
                        </div>

                        <div className="mb-4">
                            <p className="text-lg uppercase font-semibold text-gray-400">
                                Business:
                            </p>
                            <p className="text-lg">{store.currentUser?.company.bs}</p>
                        </div>
                    </div>
                    <img
                        className="object-fill"
                        src="https://static.cdn.epam.com/uploads/d5ff32f0a6d3752a4cd480b707bb0da2/EPM-E3S/images/cities/nur_sultan.jpg"
                        alt="company-img"
                    />
                </div>
                <hr/>
            </div>
            <div className="flex space-x-4">
                {["All", "Gallery", "Posts", "Todo"].map((tab) => (
                    <div
                        key={tab}
                        className={`cursor-pointer text-lg px-3 py-3 ${
                            currentTab === tab ? "active text-primary" : ""
                        }`}
                        onClick={() => setCurrentTab(tab)}
                    >
                        <p className="font-semibold text-gray-400">{tab}</p>
                    </div>
                ))}
            </div>
            <Gallery></Gallery>
        </div>

    );
};

export default UserProfile;