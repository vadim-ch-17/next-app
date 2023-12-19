export default async function handler(req, res) {
  const { token } = req.body;
  const secretKey = "6LdS4BYpAAAAAI7fSrk-dkWxGWwvlP53yZ0U_rk2";
  const url = `https://www.google.com/recaptcha/api/siteverify`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret: secretKey,
        response: token,
      }),
    });

    const data = await response.json();

    if (data.success) {
      res.status(200).json({ success: true });
    } else {
      res
        .status(400)
        .json({ success: false, error: "Failed reCAPTCHA verification" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: "Failed to verify reCAPTCHA token" });
  }
}

// export default async function handler(req, res) {
//   const { token } = req.body;
//   const secretKey = "6LeyaBUpAAAAAJEgs-cLrfDQPJO4Q0w4YjJYY42-";
//   const url = `https://www.google.com/recaptcha/api/siteverify`;

//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: `secret=${secretKey}&response=${token}`,
//     });

//     const data = await response.json();

//     if (data.success) {
//       res.status(200).json({ success: true });
//     } else {
//       res
//         .status(400)
//         .json({ success: false, error: "Failed reCAPTCHA verification" });
//     }
//   } catch (error) {
//     res
//       .status(500)
//       .json({ success: false, error: "Failed to verify reCAPTCHA token" });
//   }
// }
