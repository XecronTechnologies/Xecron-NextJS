
import { NextResponse } from 'next/server'

function formatTimestamp(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    timeZone: 'Asia/Kolkata',
        timeZoneName: 'short',
  };
  const formattedDate = new Intl.DateTimeFormat('en-IN', options).format(date);
  return formattedDate.replace(',', '');
}


export async function POST(request: Request) {
    try {
        const { name, email, phone, message } = await request.json()

        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, message: "Name, email, and message are required" },
                { status: 400 }
            )
        }

        const scriptUrl = 'https://script.google.com/macros/s/AKfycbyyF3dO28i5dHTlXmMHGgFh7vF8aRbba1PESyPWoS4pogoe_6i27JeJyexPGUDPyKxR/exec'

        const response = await fetch(scriptUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name, email,
                phone: phone || "",
                message,
                timestamp: formatTimestamp(new Date()),
            }),
        })

        if (!response.ok) {
            const errorText = await response.text()
            console.error("Google Script Error:", errorText)
            return NextResponse.json(
                { success: false, message: "Failed to submit to Google Sheets", error: errorText },
                { status: 500 }
            )
        }

        const result = await response.json()
        return NextResponse.json({ success: true, data: result })

    } catch (error) {
        console.error('Error submitting form:', error)
        return NextResponse.json(
            {
                success: false,
                message: "Internal server error",
                error: error instanceof Error ? error.message : String(error)
            },
            { status: 500 }
        )
    }
}