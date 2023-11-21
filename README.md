<Box
key={item.id}
sx={{ marginTop: "1rem", width: { xs: "80%", md: "60%" } }} >
<p>{item.percentage}</p>
<div
style={{
                  display: "flex",
                  gap: "2rem",
                  justifyContent: "space-between",
                  alignItems: "center",
                }} >
<Poll>
<div
style={{
width: `${item.percentage}`,
height: "1rem",

                      // border: "1px red solid",
                      borderRadius: "30px",

                      background: "#D8D9DA",
                    }}
                  ></div>
                </Poll>
                <Box
                  sx={{
                    width: { xs: "7rem", sm: "10rem" },
                    fontSize: { xs: "14px", sm: "19px" },
                  }}
                >
                  {item.pollName}{" "}
                </Box>
              </div>
            </Box>
