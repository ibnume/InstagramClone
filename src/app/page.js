"use client";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import OrComp from "./components/SubComponent/OrComp";
import GetTheApp from "./components/SubComponent/GetTheApp";
import Image from "next/image";
import Link from "next/link";

const loginImages = [
	{ id: 1, image: "/assets/screenshot1.png" },
	{ id: 2, image: "/assets/screenshot2.png" },
	{ id: 3, image: "/assets/screenshot3.png" },
	{ id: 4, image: "/assets/screenshot4.png" },
];

export default function Home() {
	const [currentImageId, setCurrentImageId] = useState(0);

	useEffect(() => {
		const transitionalInterval = setInterval(() => {
			setCurrentImageId((prevId) => (prevId + 1) % loginImages.length);
		}, 2000);
		return () => clearInterval(transitionalInterval);
	}, []);
	return (
		<Box className="w-screen flex items-center justify-center">
			<Box className="flex flex-row w-4/5 mt-[4rem] justify-center mb-[7rem]">
				<Box
					className="w-[380.3px] relative"
					sx={{
						backgroundImage: "url(/assets/home-phones.png)",
						backgroundSize: "468.32px 634.15px",
						backgroundPosition: "center",
						margin: "0 32px 12px 0",
						height: "650px",
						backgroundRepeat: "no-repeat",
						overflow: "hidden",
					}}>
					{loginImages.map((image, index) => (
						<Image
							key={image.id}
							src={image.image}
							alt={`image ${image.id + 1}`}
							style={{
								position: "absolute",
								opacity: currentImageId === index ? 1 : 0,
								transition: "opacity 1s ease-in-out",
								marginLeft: "114px",
								marginTop: "33px",
							}}
							width={250}
							height={538.8}
						/>
					))}
				</Box>
				<Box className="w-[350px]">
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							marginTop: "47px",
							borderRadius: "1px",
							border: "1px solid #e7e5eb",
							paddingBottom: "12px",
						}}>
						<Box sx={{ margin: "36px auto 12px auto" }}>
							<Image src="/assets/buatlogin.png" width={175} height={51} />
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}>
							<form
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									marginTop: "24px",
									width: "100%",
								}}>
								<input
									className="bg-[#fafafa] w-[75%] text-[.7rem] pt-[9px] pb-[7px] pl-[8px] rounded-[2px] border-[1px] border-solid border-gray-200 mb-[0.45rem]"
									type="email"
									name="email"
									id="email"
									placeholder="Phone number, username, or email"
								/>
								<input
									className="bg-[#fafafa] w-[75%] text-[.7rem] pt-[9px] pb-[7px] pl-[8px] rounded-[2px] border-[1px] border-solid border-gray-200 mb-3"
									type="password"
									name="password"
									id="password"
									placeholder="Password"
								/>

								<button
									className="rounded-[8px] "
									style={{
										backgroundColor: "#4cb5f9",
										margin: "8px 20px 8px 20px",
										width: "75%",
										height: "32px",
										color: "#fff",
										fontSize: "14px",
										fontWeight: "700",
									}}>
									Log in
								</button>
							</form>
							<OrComp />
							<Box sx={{ margin: "8px 40px" }}>
								<button className="flex flex-row items-center text-[#385185] text-[13px] font-semibold ">
									<span className="w-[16px] h-[16px] mr-[10px] ">
										<img src="/assets/fb.png" style={{ objectFit: "cover" }} />
									</span>
									Log in with Facebook
								</button>
							</Box>
							<Box
								sx={{ margin: "8px auto", color: "#00376b", fontSize: "11px" }}>
								Forgot password?
							</Box>
						</Box>
					</Box>
					<Box
						sx={{
							width: "100%",
							padding: "20px 0 ",
							borderRadius: "1px",
							border: "1px solid #e7e5eb",
							margin: "10px 0",
						}}>
						<p className="text-center text-[13px]">
							Don't have an account?
							<Link
								href="/Register"
								style={{ color: "#4cb5f9", marginLeft: "5px" }}>
								Sign up
							</Link>
						</p>
					</Box>
					<GetTheApp />
				</Box>
			</Box>
		</Box>
	);
}
