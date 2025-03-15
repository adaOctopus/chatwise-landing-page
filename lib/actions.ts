"use server"

export async function subscribeToNewsletter(email: string) {
  try {
    const API_KEY = process.env.MAILCHIMP_API_KEY
    const LIST_ID = process.env.MAILCHIMP_LIST_ID

    if (!API_KEY || !LIST_ID) {
      console.error("Missing environment variables: MAILCHIMP_API_KEY or MAILCHIMP_LIST_ID")
      return {
        success: false,
        message: "Server configuration error. Please contact support.",
      }
    }

    // Extract datacenter from API key
    const DATACENTER = API_KEY.split("-")[1]
    if (!DATACENTER) {
      console.error("Invalid API key format. Expected format: xxxx-us1")
      return {
        success: false,
        message: "Server configuration error. Please contact support.",
      }
    }

    // Prepare the data according to Mailchimp API specs
    // Include empty address fields to satisfy Mailchimp's requirements
    const data = {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        // Add empty address fields to satisfy Mailchimp's requirements
        ADDRESS: {
          addr1: "",
          city: "",
          state: "",
          zip: "",
          country: "US", // Default country code
        },
      },
    }

    // Use the members endpoint with POST
    const response = await fetch(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const responseData = await response.json()

    // Handle member exists error gracefully
    if (response.status === 400 && responseData.title === "Member Exists") {
      return {
        success: true,
        message: "You're already subscribed! We'll notify you when we launch.",
      }
    }

    if (!response.ok) {
      console.error("Mailchimp API error:", responseData)
      return {
        success: false,
        message: "Unable to subscribe at this time. Please try again later.",
      }
    }

    return {
      success: true,
      message: "You're on the list! We'll notify you when we launch.",
    }
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return {
      success: false,
      message: "Unable to subscribe at this time. Please try again later.",
    }
  }
}

