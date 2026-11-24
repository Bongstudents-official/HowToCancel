const GUIDES_DATA = [
  {
    id: "adobe-creative-cloud",
    name: "Adobe Creative Cloud",
    category: "Software & SaaS",
    region: "Global",
    difficulty: "Trap",
    estimatedTime: "15–30 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://account.adobe.com/plans",
    darkPatterns: ["Early Termination Fee", "Retention Discount Loop", "Multi-Step Guilt Trip"],
    summary: "Annual plans billed monthly charge a hefty 50% early cancellation fee unless you switch plans first.",
    steps: [
      "Go directly to your Adobe Plans page and click 'Manage plan' next to your subscription.",
      "Click 'Cancel your plan' and verify your password.",
      "Skip through 3 pages of discount offers and retention surveys until you reach the final confirmation button.",
      "WORKAROUND FOR FEE: If it tries to charge an Early Termination Fee, click 'Change plan' instead, switch to the cheapest Photography plan (which starts a new 14-day trial window), and then cancel immediately for a full refund."
    ],
    paymentTip: "If billed via PayPal or Apple App Store, also revoke the recurring billing agreement inside PayPal/Apple ID settings.",
    supportScript: `Subject: Immediate Cancellation Request & Fee Waiver – Account [YOUR_EMAIL]\n\nHello Adobe Support,\n\nI am requesting the immediate cancellation of my Creative Cloud subscription associated with [YOUR_EMAIL] effective today, and confirmation that no further recurring charges will be billed.\n\nPlease waive any early termination fees and send written confirmation of this cancellation.\n\nThank you,\n[YOUR_NAME]`
  },
  {
    id: "disney-plus-hotstar",
    name: "JioHotstar / Disney+ Hotstar",
    category: "Streaming",
    region: "India",
    difficulty: "Hard",
    estimatedTime: "5–10 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.hotstar.com/in/mypage",
    darkPatterns: ["Zombie UPI AutoPay", "App vs. Web Split"],
    summary: "Cancelling inside the Hotstar app often leaves your UPI AutoPay or card e-mandate active until you revoke it in your bank/UPI app.",
    steps: [
      "Open Hotstar on a desktop browser (not the mobile app) and go to 'My Space' > 'Help & Settings' > 'Subscription & Devices'.",
      "Click 'Cancel Subscription' and confirm.",
      "CRITICAL STEP: Open your UPI app (GPay, PhonePe, Paytm, or BHIM) -> go to 'AutoPay / Mandates' -> select the Hotstar mandate and tap 'Revoke / Cancel Mandate'.",
      "If billed via Apple ID or Google Play, cancel directly inside your phone's App Store / Play Store Subscriptions menu."
    ],
    paymentTip: "Under RBI e-mandate rules, revoking the mandate inside your UPI app or SiHub (for Indian debit/credit cards) completely blocks future auto-debits.",
    supportScript: null
  },
  {
    id: "amazon-prime",
    name: "Amazon Prime",
    category: "Shopping & Streaming",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.amazon.in/gp/primecentral",
    darkPatterns: ["Roach Motel (4-Screen Loop)", "Confusing Button Colors"],
    summary: "Amazon hides the final confirmation behind four consecutive 'Are you sure?' screens that highlight 'Keep My Benefits' in bright yellow.",
    steps: [
      "Open the Prime Central link above (use amazon.com instead of amazon.in if outside India).",
      "Click 'Manage Membership' at the top right -> 'Update, cancel and more' -> 'End Membership'.",
      "Scroll to the bottom on each page and click the muted 'Continue to Cancel' button (ignore the bright yellow 'Remind Me Later' buttons).",
      "On the final screen, click 'End Now' (for an immediate prorated refund if eligible) or 'End on [Renewal Date]'."
    ],
    paymentTip: "In India, if you paid via UPI AutoPay, double-check your UPI app's AutoPay section after 24 hours to verify the mandate status changed to 'Revoked'.",
    supportScript: null
  },
  {
    id: "cult-fit",
    name: "Cult.fit (Cure.fit)",
    category: "Fitness & Gyms",
    region: "India",
    difficulty: "Trap",
    estimatedTime: "20+ mins (Support Ticket)",
    lastVerified: "Nov 2026",
    directUrl: "https://www.cult.fit/me/subscriptions",
    darkPatterns: ["No Self-Serve Cancel Button", "Pause-Instead-of-Cancel Nudge"],
    summary: "No direct self-serve cancellation button in the app; requires raising a support ticket and pushing back against pause offers.",
    steps: [
      "Open the Cult.fit app -> tap your Profile icon -> 'Support' -> 'Memberships & Subscriptions'.",
      "Select your active Cultpass and choose 'Cancel / Refund Membership'.",
      "The chat bot will repeatedly offer to 'Pause' or 'Transfer' your membership—decline both and insist on connecting to an agent.",
      "Request a ticket ID and written email confirmation of cancellation."
    ],
    paymentTip: "If your membership was financed via No-Cost EMI (Bajaj Finserv / ZestMoney / Credit Card EMI), cancelling Cult.fit does NOT close the loan—you must request an EMI foreclosure letter.",
    supportScript: `Subject: Formal Cancellation Request – Cultpass Membership ([REGISTERED_PHONE])\n\nHi Cult.fit Support Team,\n\nI am writing to formally cancel my Cultpass membership registered under [REGISTERED_PHONE] / [YOUR_EMAIL]. I do not wish to pause or transfer my membership.\n\nPlease process the cancellation immediately, stop any upcoming auto-renewals, and share the cancellation confirmation ID.\n\nRegards,\n[YOUR_NAME]`
  },
  {
    id: "nytimes",
    name: "The New York Times",
    category: "News & Media",
    region: "US/UK",
    difficulty: "Trap",
    estimatedTime: "10–15 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://myaccount.nytimes.com/seg/settings",
    darkPatterns: ["Forced Live Chat / Phone Call", "Retention Agent Stall"],
    summary: "Depending on your billing state/country, NYT may block online cancellation and force you into a live chat queue.",
    steps: [
      "Log in and open Account Settings -> 'Subscriptions' -> click 'Cancel Subscription'.",
      "If you see an online cancellation button (available in California, UK, EU, and select regions), click through the survey to finish.",
      "If forced into Live Chat, immediately paste the support script below so the agent skips the 10-minute retention pitch.",
      "Save the chat transcript or confirmation number before closing the tab."
    ],
    paymentTip: "If you subscribed via Apple News or Google Play, you bypass NYT chat completely—cancel directly in your phone's Subscriptions settings.",
    supportScript: `Hi, I would like to cancel my New York Times subscription (Email: [YOUR_EMAIL]) effective immediately. I am not interested in promotional discounts or pausing my account. Please process the cancellation now and provide my confirmation number. Thank you.`
  },
  {
    id: "spotify-premium",
    name: "Spotify Premium",
    category: "Streaming",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.spotify.com/account/overview/",
    darkPatterns: ["App Store Billing Redirect"],
    summary: "Quick online cancellation via browser, though you cannot cancel inside the iOS or Android mobile apps.",
    steps: [
      "Open Spotify in a web browser (cannot be done inside the mobile app) and go to Account Overview.",
      "Scroll to 'Your plan' and click 'Change plan'.",
      "Scroll all the way down to 'Available plans' and click 'Cancel Premium'.",
      "Click 'Continue to cancel' until you see the confirmation message showing when your account reverts to Spotify Free."
    ],
    paymentTip: "In India, if you used a one-time UPI top-up plan rather than AutoPay, it will expire automatically with no cancellation needed.",
    supportScript: null
  },
  {
    id: "youtube-premium",
    name: "YouTube Premium",
    category: "Streaming & Music",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.youtube.com/paid_memberships",
    darkPatterns: ["Pause Nudge", "iOS App Store Markup Trap"],
    summary: "Straightforward in account settings, though Apple iOS subscriptions can cost more due to App Store billing.",
    steps: [
      "Go to **YouTube Paid Memberships** in your browser while signed into your Google account.",
      "Click **Manage membership** next to YouTube Premium.",
      "Select **Deactivate** (or **Cancel membership**), skip the **Pause** offer, and confirm until you see the end date."
    ],
    paymentTip: "If you subscribed through an iPhone/iPad, manage and cancel it under **iOS Settings > [Your Name] > Subscriptions**.",
    supportScript: null
  },
  {
    id: "netflix",
    name: "Netflix",
    category: "Streaming",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.netflix.com/cancelplan",
    darkPatterns: ["Downgrade-Instead Offer"],
    summary: "Direct cancellation URL works quickly, though Netflix may prompt you to switch to a lower-priced plan first.",
    steps: [
      "Visit `netflix.com/cancelplan` and sign in if prompted.",
      "Ignore the **Change Plan** option and click **Finish Cancellation**.",
      "Verify that your account page shows your **Membership ends on [Date]** status."
    ],
    paymentTip: "If billed through a telecom bundle, cable operator, or third party, you must cancel through that partner's billing portal.",
    supportScript: null
  },
  {
    id: "swiggy-one",
    name: "Swiggy One",
    category: "Food & Quick Commerce",
    region: "India",
    difficulty: "Hard",
    estimatedTime: "5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.swiggy.com/my-account",
    darkPatterns: ["Auto-Renewal Toggle in Account", "UPI AutoPay Mandate"],
    summary: "Turn off auto-renewal in Swiggy settings and revoke any active UPI AutoPay mandate so renewal doesn't trigger automatically.",
    steps: [
      "Open the Swiggy app > tap **Account** > **Swiggy One**.",
      "Go to membership management / auto-renew settings and **turn off Auto-Renewal**.",
      "Open your UPI app (GPay, PhonePe, etc.) > **AutoPay** > cancel any active **Swiggy** mandate."
    ],
    paymentTip: "Even after turning off auto-renewal in-app, checking your UPI AutoPay list gives peace of mind that no mandate remains active.",
    supportScript: null
  },
  {
    id: "zomato-gold",
    name: "Zomato Gold",
    category: "Food & Dining",
    region: "India",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.zomato.com",
    darkPatterns: ["App Store vs. App Split", "UPI AutoPay Mandate"],
    summary: "If you subscribed via Apple or Google Play, the cancel button won't appear inside Zomato—and UPI mandates may still be active.",
    steps: [
      "Open the Zomato app > tap your **Profile** picture > select **Zomato Gold**.",
      "Scroll to **Manage Membership** and tap **Cancel Membership** or **Turn off Auto-Renew**.",
      "**Missing button?** Cancel inside **iOS Settings > Apple ID > Subscriptions** or **Google Play > Payments & subscriptions > Subscriptions**.",
      "If paid via UPI AutoPay, open your UPI app (GPay, PhonePe, Paytm) > **AutoPay / Mandates** and revoke the Zomato mandate."
    ],
    paymentTip: "Revoking the mandate directly inside your UPI app stops future recurring charges even if an app setting lags.",
    supportScript: null
  },
  {
    id: "airtel-xstream-play",
    name: "Airtel Xstream Play",
    category: "Streaming & Telecom",
    region: "India",
    difficulty: "Hard",
    estimatedTime: "5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.airtel.in/xstream-play",
    darkPatterns: ["Bundled vs. Paid Add-On Confusion", "App Store / Carrier Billing Split"],
    summary: "Standalone/paid add-ons are managed in Airtel Thanks or your app store/carrier billing settings, while bundled perks tie to your mobile/broadband plan.",
    steps: [
      "Open the **Airtel Thanks** app signed in with your registered Airtel number.",
      "Go to **Manage** / **Active Packs** / **Claimed Rewards** and locate your Xstream Play subscription.",
      "Select **Unsubscribe** or turn off auto-renewal, and save the confirmation SMS or reference number.",
      "If billed through Google Play or Apple, cancel under your **Google Play** or **Apple ID Subscriptions** list."
    ],
    paymentTip: "If your OTT perk is bundled with a postpaid, prepaid, or broadband plan, changing or removing add-ons can affect your plan benefits.",
    supportScript: null
  },
  {
    id: "chatgpt-plus",
    name: "ChatGPT Plus",
    category: "AI & Productivity",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://chatgpt.com",
    darkPatterns: ["Platform-Locked Billing", "Uninstalling App Doesn't Cancel"],
    summary: "Uninstalling the mobile app does not stop billing—you must cancel on whichever platform originally processed the payment.",
    steps: [
      "If billed on **chatgpt.com**, open your account menu > **Settings** > **Billing** > **Cancel** under **Cancel plan**.",
      "If billed on **iPhone/iPad**, go to **iOS Settings > [Your Name] > Subscriptions > ChatGPT > Cancel Subscription**.",
      "If billed on **Android**, open **Google Play Store > Subscriptions > ChatGPT > Cancel subscription**."
    ],
    paymentTip: "You don't need to delete your ChatGPT account just to stop future charges—cancelling stops renewals while keeping your account intact.",
    supportScript: null
  },
  {
    id: "canva-pro",
    name: "Canva Pro",
    category: "Design & SaaS",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.canva.com/settings/billing-and-plans",
    darkPatterns: ["Annual Renewal Surprise", "Team Billing Confusion"],
    summary: "Accessible directly in Billing & Plans, though annual plans can renew for a full year if caught late.",
    steps: [
      "Go to **Settings > Billing & plans** (or open the direct billing link above).",
      "Click **Cancel subscription** next to Canva Pro.",
      "Follow the confirmation prompts until you see the end date for your current billing cycle."
    ],
    paymentTip: "Check whether you are inside a personal account or a shared team/brand workspace before cancelling so you cancel the right billing profile.",
    supportScript: null
  },
  {
    id: "nordvpn",
    name: "NordVPN",
    category: "Security & VPN",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://my.nordaccount.com/billing/",
    darkPatterns: ["Auto-Renewal Default", "30-Day Refund Window Rules"],
    summary: "Turn off auto-renewal in your Nord Account billing dashboard—or via Apple/Google if subscribed on mobile.",
    steps: [
      "Sign in to **Nord Account > Billing**.",
      "Select your active subscription and click **Cancel auto-renewal** (or **Manage**).",
      "Confirm cancellation and check your email for confirmation."
    ],
    paymentTip: "If you are within the refund window and want a refund rather than just stopping future renewal, contact support chat right after turning off auto-renewal.",
    supportScript: `Hello NordVPN Support,\n\nI have turned off auto-renewal on my account ([YOUR_EMAIL]) and would like to request a cancellation and refund under your refund policy if eligible. Please confirm once processed.\n\nThank you,\n[YOUR_NAME]`
  },
  {
    id: "zee5",
    name: "ZEE5",
    category: "Streaming",
    region: "India",
    difficulty: "Hard",
    estimatedTime: "5–10 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.zee5.com/myaccount/subscription",
    darkPatterns: ["Hidden Cancel Option", "Zombie Auto-Renewal", "UPI AutoPay Mandate"],
    summary: "OTT users frequently report hunting for the cancel button across web/app menus and still seeing renewals if UPI AutoPay or card mandates stay active.",
    steps: [
      "Log in on ZEE5 web or open the app > **More / Profile** > **My Subscriptions**.",
      "Select your active pack and look for **Cancel Subscription** or **Turn off Auto-Renewal**.",
      "**Crucial check:** Open your UPI app (GPay, PhonePe, Paytm, BHIM) > **AutoPay / Mandates** and revoke any active ZEE5 mandate.",
      "If billed via Apple ID or Google Play, cancel directly under your device's **Subscriptions** settings."
    ],
    paymentTip: "Take a screenshot of the cancellation confirmation screen and verify inside your UPI app or bank e-mandate list that future debits are stopped.",
    supportScript: `Subject: Cancellation Request for ZEE5 Subscription – [REGISTERED_PHONE_OR_EMAIL]\n\nHello ZEE5 Support,\n\nPlease cancel my active ZEE5 subscription linked to [REGISTERED_PHONE_OR_EMAIL] with immediate effect and stop any future auto-renewals.\n\nKindly share written confirmation of this cancellation.\n\nThanks,\n[YOUR_NAME]`
  },
  {
    id: "truecaller",
    name: "Truecaller (Gold / Premium)",
    category: "Utilities & Caller ID",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://play.google.com/store/account/subscriptions",
    darkPatterns: ["Free Trial to Auto-Renew", "Play Store / App Store Billing Split"],
    summary: "Many users sign up for a trial or caller-ID perk and forget to cancel before recurring billing kicks in via Google Play, Apple, or UPI.",
    steps: [
      "On Android, open **Google Play Store** > tap your **Profile icon** > **Payments & subscriptions** > **Subscriptions** > select **Truecaller** > tap **Cancel subscription**.",
      "On iPhone, open **iOS Settings** > tap your **Name** > **Subscriptions** > select **Truecaller** > tap **Cancel Subscription**.",
      "If paid via UPI AutoPay, also check your UPI app's **AutoPay / Mandates** section and cancel any active mandate."
    ],
    paymentTip: "Uninstalling the Truecaller app alone does **not** cancel a Google Play, Apple, or UPI recurring subscription.",
    supportScript: null
  },
  {
    id: "icloud-plus",
    name: "Apple iCloud+",
    category: "Cloud Storage",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.apple.com/108437",
    darkPatterns: ["Storage Quota Downgrade Anxiety", "Silent Monthly Renewal"],
    summary: "Quick to cancel in Apple settings, but downgrading storage means you must back up or trim files above your free 5GB limit.",
    steps: [
      "On iPhone or iPad, open **Settings** > tap **Your Name** > **Subscriptions**.",
      "Tap **iCloud+** (or your active iCloud storage plan).",
      "Tap **Cancel Subscription** (or **Downgrade Options** and choose the free 5GB tier) and confirm."
    ],
    paymentTip: "Before cancelling, export photos, videos, and backups that exceed 5GB so you don't lose access to files after the billing period ends.",
    supportScript: null
  },
  {
    id: "google-one",
    name: "Google One",
    category: "Cloud Storage",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://one.google.com/settings",
    darkPatterns: ["Gmail/Drive Quota Warning", "Play Store Renewal"],
    summary: "Cancelling stops future payments immediately, though going over your free 15GB Google storage limit can block new emails/uploads later.",
    steps: [
      "Go to **one.google.com/settings** (or open the Google One app).",
      "Scroll to **Membership options** / **Cancel membership**.",
      "Follow the prompts to confirm cancellation and check your expiration date."
    ],
    paymentTip: "If your plan is billed through Apple or a third-party provider, manage or cancel it through that billing source instead.",
    supportScript: null
  },
  {
    id: "linkedin-premium",
    name: "LinkedIn Premium",
    category: "Career & Networking",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.linkedin.com/mypreferences/d/manage-subscription",
    darkPatterns: ["Free Trial Renewal Surprise", "Multi-Step Cancellation Flow"],
    summary: "Popular for 1-month job-hunt trials that quietly convert into recurring monthly or annual charges if you miss the cutoff.",
    steps: [
      "Sign in on desktop and open **Me** > **Settings & Privacy** > **Subscriptions and payments**.",
      "Click **Cancel subscription** next to your active Premium plan.",
      "Complete the cancellation steps until LinkedIn confirms your subscription is cancelled."
    ],
    paymentTip: "If you subscribed through the LinkedIn mobile app on iOS or Android, cancel directly via **Apple Subscriptions** or **Google Play Subscriptions**.",
    supportScript: null
  },
  {
    id: "upi-autopay-phonepe",
    name: "UPI AutoPay (PhonePe)",
    category: "Payment Apps & AutoPay",
    region: "India",
    difficulty: "Easy",
    estimatedTime: "2 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.phonepe.com",
    darkPatterns: ["Zombie Auto-Debits", "App-Specific Mandate Lock"],
    summary: "Stop recurring UPI mandates set up through PhonePe from your AutoPay settings.",
    steps: [
      "Open **PhonePe** and tap your **Profile picture** at the top left.",
      "Tap **AutoPay** (or **Autopay Settings** under Payment Management).",
      "Select the active mandate you want to stop and tap **Delete** (or **Pause** to temporarily halt debits).",
      "Confirm with your **UPI PIN** if prompted and verify the mandate status updates."
    ],
    paymentTip: "If you don't see a mandate here, check any other UPI app (like GPay, Paytm, or BHIM) where you may have approved it originally.",
    supportScript: null
  },
  {
    id: "upi-autopay-paytm",
    name: "UPI AutoPay (Paytm)",
    category: "Payment Apps & AutoPay",
    region: "India",
    difficulty: "Easy",
    estimatedTime: "2 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://paytm.com",
    darkPatterns: ["Zombie Auto-Debits", "Menu Label Variations"],
    summary: "Manage or cancel recurring UPI mandates inside Paytm's automatic payments settings.",
    steps: [
      "Open **Paytm** and tap your **Profile icon** at the top left.",
      "Tap **UPI & Payment Settings** > **Automatic Payments** (or **UPI AutoPay**).",
      "Select the active mandate from the list and tap **Cancel** (or **Pause** with dates).",
      "Enter your **UPI PIN** to complete cancellation and save the confirmation."
    ],
    paymentTip: "Cancel at least 1–2 days before a scheduled debit date to avoid catching a payment already queued for processing.",
    supportScript: null
  },
  {
    id: "upi-autopay-bhim",
    name: "UPI Mandates (BHIM App)",
    category: "Payment Apps & AutoPay",
    region: "India",
    difficulty: "Easy",
    estimatedTime: "2 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.bhimupi.org.in",
    darkPatterns: ["Zombie Auto-Debits"],
    summary: "Revoke active UPI mandates inside the BHIM app using your UPI PIN.",
    steps: [
      "Open the **BHIM** app and go to **Mandates** (on the home screen or under **Bank Accounts**).",
      "Select the active mandate you want to stop.",
      "Tap **Revoke** (or **Cancel**) and enter your **UPI PIN** to confirm."
    ],
    paymentTip: "Keep the revocation confirmation screen or SMS in case a merchant initiates a billing request right around renewal time.",
    supportScript: null
  },
  {
    id: "google-play-subscriptions",
    name: "Google Play Store Subscriptions",
    category: "App Stores & Billing",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://play.google.com/store/account/subscriptions",
    darkPatterns: ["Uninstalling App Doesn't Cancel", "Wrong Google Account Trap"],
    summary: "Cancel app, game, or trial subscriptions billed through Google Play—deleting the app alone will not stop renewals.",
    steps: [
      "Open **Google Play Store** and make sure you are signed into the **same Google account** used to subscribe.",
      "Tap your **Profile icon** > **Payments & subscriptions** > **Subscriptions**.",
      "Select the subscription, tap **Cancel subscription**, and follow the prompts to confirm."
    ],
    paymentTip: "Cancel at least 48 hours before your renewal date if you want to avoid an upcoming billing cycle.",
    supportScript: null
  },
  {
    id: "capcut-pro",
    name: "CapCut Pro",
    category: "Video Editing Apps",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.capcut.com",
    darkPatterns: ["Store vs. Web Billing Split", "Free Trial Auto-Renewal", "Uninstalling App Doesn't Cancel"],
    summary: "Where you cancel depends on your original receipt—Apple App Store, Google Play, or CapCut Web/direct billing—and deleting the app won't stop renewals.",
    steps: [
      "Check your payment receipt to see whether CapCut Pro was billed via **Apple**, **Google Play**, or **CapCut Web / direct merchant**.",
      "**iPhone / iPad:** Open **Settings > [Your Name] > Subscriptions > CapCut > Cancel Subscription**.",
      "**Android:** Open **Google Play Store > Profile icon > Payments & subscriptions > Subscriptions > CapCut > Cancel subscription**.",
      "**Web / Direct:** Sign in to **CapCut Web** with the purchasing account, open subscription/payment management, turn off auto-renewal, and save your end date."
    ],
    paymentTip: "Cancel at least 24 hours before renewal, and if paid via PayPal or UPI AutoPay in supported regions, verify that recurring billing/mandates are turned off.",
    supportScript: `Subject: CapCut Pro Subscription Cancellation Request – Account [YOUR_EMAIL]\n\nHello CapCut Support,\n\nI am requesting cancellation of my CapCut Pro subscription associated with [YOUR_EMAIL] and confirmation that automatic renewal is disabled with no further charges.\n\nOrder / Receipt Reference (if applicable): [ORDER_ID]\n\nThank you,\n[YOUR_NAME]`
  },
  {
    id: "picsart",
    name: "Picsart",
    category: "Photo & Design Editing Apps",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://picsart.com",
    darkPatterns: ["In-App vs. Store Billing Split", "Downgrade-to-Free Terminology", "Deleting App Doesn't Cancel"],
    summary: "In-app mobile subscriptions are cancelled in Apple or Google Play—not inside the Picsart app—while web plans cancel under Billing & Subscriptions.",
    steps: [
      "**iPhone / iPad:** Open **Settings > [Your Name] > Subscriptions > Picsart > Cancel Subscription**.",
      "**Android:** Open **Google Play Store > Profile icon > Payments & subscriptions > Subscriptions > Picsart > Cancel subscription**.",
      "**Web:** Sign in at `picsart.com` > click your **Profile photo > Settings > Billing & Subscriptions > Cancel subscription** > select **Downgrade to free plan**."
    ],
    paymentTip: "Deleting the Picsart app or your Picsart account does not cancel an active subscription—cancel 24 to 48 hours before your renewal date.",
    supportScript: null
  },
  {
    id: "vsco",
    name: "VSCO Membership",
    category: "Photo Editing Apps",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://vsco.co",
    darkPatterns: ["Stripe Portal Redirect on Web", "App Store / Play Store Split", "Deleting App Doesn't Cancel"],
    summary: "You must cancel through whichever platform billed you—Apple, Google Play, or the Stripe billing portal linked from VSCO's web account page.",
    steps: [
      "**Apple / Google Play:** Cancel under **iOS Settings > Subscriptions** or **Google Play > Payments & subscriptions > Subscriptions**.",
      "**Web (VSCO.co):** Sign in on `vsco.co` > go to **Account > Subscription > Manage Billing** to open the **Stripe billing portal** (check your email inbox/spam for the login link if prompted).",
      "Confirm cancellation inside the Stripe portal and keep your confirmation record."
    ],
    paymentTip: "Deleting the VSCO app or deactivating your account does not stop recurring billing or free trials.",
    supportScript: null
  },
  {
    id: "adobe-lightroom",
    name: "Adobe Lightroom",
    category: "Photo Editing Apps",
    region: "Global",
    difficulty: "Trap",
    estimatedTime: "10–20 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://account.adobe.com/plans",
    darkPatterns: ["14-Day Refund Window", "Early Termination Fee", "Mobile Store vs. Adobe Account Split"],
    summary: "Direct Adobe plans can carry early cancellation fees after the initial 14-day window, while iOS/Android app-store plans are managed in your store settings.",
    steps: [
      "If billed via **iOS App Store** or **Google Play**, cancel directly in your device's **Subscriptions** menu.",
      "If billed directly through **Adobe**, sign in to your Adobe Account > **Manage Plan** next to Lightroom.",
      "Select **Cancel Plan**, decline retention offers, and check for a cancellation confirmation email."
    ],
    paymentTip: "Cancelling within 14 days of order placement avoids early cancellation fees on eligible direct plans; check your plan terms before confirming.",
    supportScript: `Subject: Lightroom Subscription Cancellation Request – Account [YOUR_EMAIL]\n\nHello Adobe Support,\n\nPlease cancel my Lightroom subscription associated with [YOUR_EMAIL] and confirm that no further renewal charges will be billed.\n\nThank you,\n[YOUR_NAME]`
  },
  {
    id: "remini",
    name: "Remini (AI Photo & Video Enhancer)",
    category: "Photo & Video Editing Apps",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://remini.zendesk.com/hc/en-us/articles/18980665710481-How-do-I-cancel-my-Remini-mobile-subscription",
    darkPatterns: ["Short Free Trial Auto-Renewal", "Web vs. App Store Billing Split", "Uninstalling App Doesn't Cancel"],
    summary: "Remini plans are split between mobile app stores and Remini Web, and deleting the app will not stop trial-to-paid renewals.",
    steps: [
      "**iPhone / iPad:** Open **iOS Settings > [Your Name] > Subscriptions > Remini > Cancel Subscription** (or tap **Settings** inside Remini > **Manage subscriptions**).",
      "**Android:** Open **Google Play Store > Profile icon > Payments & subscriptions > Subscriptions > Remini > Cancel subscription**.",
      "**Remini Web:** Sign in on the Remini Web homepage > go to **My Account > Subscription > Cancel plan** and confirm."
    ],
    paymentTip: "If you used a UPI AutoPay mandate on Android/Google Play, also check your UPI app's **AutoPay / Mandates** list to confirm no active mandate remains.",
    supportScript: null
  },
  {
    id: "inshot-pro",
    name: "InShot Pro",
    category: "Video & Photo Editing Apps",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://play.google.com/store/account/subscriptions",
    darkPatterns: ["Uninstalling App Doesn't Cancel", "Store Subscription Lock-In"],
    summary: "Recurring InShot Pro plans are billed through your app store rather than by uninstalling the app.",
    steps: [
      "**Android:** Open **Google Play Store > Profile icon > Payments & subscriptions > Subscriptions > InShot > Cancel subscription** and confirm.",
      "**iPhone / iPad:** Open **Settings > [Your Name] > Subscriptions > InShot > Cancel Subscription**."
    ],
    paymentTip: "Deleting the InShot app or account does not cancel recurring billing—cancel directly in Google Play or Apple Subscriptions.",
    supportScript: null
  },
  {
    id: "vn-video-editor-pro",
    name: "VN Video Editor Pro",
    category: "Video Editing Apps",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://vlognow.me/help/others/vn-pro-issues/",
    darkPatterns: ["Per-Platform Subscription Lock", "Uninstalling App Doesn't Cancel"],
    summary: "VN Pro is managed per platform store (Apple ID or Google Play) rather than shared across all platforms under one login.",
    steps: [
      "**iPhone / iPad / Mac:** Open device **Settings > [Your Name] > Subscriptions > VN: Video Editor > Cancel Subscription**.",
      "**Android:** Open **Google Play Store > Profile icon > Payments & subscriptions > Subscriptions > VN: Video Editor > Cancel subscription**."
    ],
    paymentTip: "Uninstalling VN does not stop renewals; cancel inside the store account that processed the purchase.",
    supportScript: null
  },
  {
    id: "lumafusion",
    name: "LumaFusion (Add-Ons & Storyblocks)",
    category: "Video Editing Apps",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://luma-touch.com/",
    darkPatterns: ["One-Time App vs. Recurring Add-On Mix", "Store Billing Lock-In"],
    summary: "While the base editor is often a standalone purchase, recurring add-ons (like Storyblocks) renew through your app store billing settings.",
    steps: [
      "**iPhone / iPad:** Open **Settings > [Your Name] > Subscriptions** and select your **LumaFusion** / **Storyblocks for LumaFusion** subscription.",
      "Tap **Cancel Subscription** and confirm before your next renewal date.",
      "**Android:** Check **Google Play Store > Payments & subscriptions > Subscriptions** for any active LumaFusion add-on."
    ],
    paymentTip: "Cancelling a recurring add-on stops future renewals at the end of the current period without deleting your local editing projects.",
    supportScript: null
  },
  {
    id: "xbox-game-pass",
    name: "Xbox Game Pass",
    category: "Gaming Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://account.microsoft.com/services",
    darkPatterns: ["Recurring Billing Toggle", "Past-Due Balance Block"],
    summary: "Manage or cancel via your Microsoft account services page or directly on an Xbox console before your next billing date.",
    steps: [
      "**Web:** Sign in at `account.microsoft.com/services` using the Microsoft account that holds the subscription, select **Manage** next to Xbox Game Pass, and choose **Cancel subscription** or turn off recurring billing.",
      "**Console:** Press the **Xbox button** > **Profile & system > Settings > Account > Subscriptions**, pick your plan, and select **Cancel subscription**.",
      "Check that the status shows an expiration date rather than an active renewal."
    ],
    paymentTip: "Cancel 24–48 hours before renewal, and clear any past-due account balance if the cancel option is blocked.",
    supportScript: null
  },
  {
    id: "playstation-plus",
    name: "PlayStation Plus",
    category: "Gaming Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.playstation.com/en-in/support/store/cancel-ps-store-subscription/",
    darkPatterns: ["Multi-Platform Menu Split", "Auto-Renew Default"],
    summary: "Cancel from PlayStation Account Management on the web, on your PS5/PS4 console, or inside the PlayStation App.",
    steps: [
      "**Web:** Sign in to **PlayStation Account Management**, open **Subscription**, select **PlayStation Plus**, and choose **Cancel Subscription**.",
      "**PS5:** Go to **Settings > Users and Accounts > Account > Payment and Subscriptions > Subscriptions** > select **PlayStation Plus** > **Cancel Subscription**.",
      "**PS App:** Open **PlayStation Store** > top-right menu > **Subscriptions Management** > select **PlayStation Plus** > **Cancel**."
    ],
    paymentTip: "Your benefits stay active until the end of the current paid cycle, and the button will switch to **Reactivate Subscription** once cancelled.",
    supportScript: null
  },
  {
    id: "nintendo-switch-online",
    name: "Nintendo Switch Online",
    category: "Gaming Subscriptions",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://accounts.nintendo.com/portal",
    darkPatterns: ["48-Hour Cutoff Rule", "No Undo After Turning Off Auto-Renew", "180-Day Cloud Save Window"],
    summary: "Auto-renewal must be turned off at least 48 hours before expiry, and once switched off it cannot be toggled back on.",
    steps: [
      "**Web:** Sign in at `accounts.nintendo.com/portal` with the purchasing Nintendo Account, select **Nintendo Switch Online**, and choose **Cancel Your Pass by Turning Off Auto-Renewal**.",
      "**Console:** Open **Nintendo eShop** from the HOME menu, select your account icon, and turn off automatic renewal under account/membership options.",
      "**App Store / Google Play:** If billed through Apple or Google Play, cancel inside that store's **Subscriptions** settings."
    ],
    paymentTip: "Turn off auto-renewal at least 48 hours before renewal, and note that cloud save backups are only retained for 180 days after membership expires if you do not renew.",
    supportScript: null
  },
  {
    id: "ea-play",
    name: "EA Play",
    category: "Gaming Subscriptions",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.ea.com/manage-membership/cancel",
    darkPatterns: ["Store vs. EA Account Split", "Library Games Removed at Expiry"],
    summary: "Where you cancel depends on whether you joined via EA Account or a third-party store like Steam, Epic Games, PlayStation, or Xbox.",
    steps: [
      "**EA Account (PC / EA app):** Sign in to your **EA Account**, select **Subscriptions and Memberships**, and click **Cancel membership**.",
      "**PlayStation / Xbox:** Manage or cancel in your **PlayStation Subscription** settings or **Microsoft Services & subscriptions** page.",
      "**Steam / Epic Games:** Cancel through your **Steam** account subscriptions or **Epic Games** account **Subscriptions** tab if purchased there."
    ],
    paymentTip: "Your access to EA Play list games ends when your billing cycle finishes, though your save files remain intact if you rejoin later.",
    supportScript: null
  },
  {
    id: "gta-plus",
    name: "GTA+",
    category: "Gaming Subscriptions",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.rockstargames.com/articles/6Rxf9J6yBYRq0ePEOP2el4/how-to-cancel-gta",
    darkPatterns: ["Platform-Specific Billing Split", "Re-Subscription Cooldown After Expiry"],
    summary: "You must cancel auto-renewal through the exact store or launcher where you originally bought GTA+.",
    steps: [
      "**Rockstar Games / Epic Games:** Manage your subscription via Rockstar's GTA+ management link or your **Epic Games** account subscriptions page.",
      "**PlayStation 5 / Xbox:** Cancel inside **PlayStation Account Management / Subscriptions** or **Microsoft Services & subscriptions**.",
      "**Steam:** Open your **Steam Account** subscriptions settings to cancel auto-renewal."
    ],
    paymentTip: "After a GTA+ subscription expires, there can be a brief waiting period before you can subscribe again.",
    supportScript: null
  },
  {
    id: "discord-nitro",
    name: "Discord Nitro",
    category: "Gaming & Community",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.discord.com/hc/en-us/articles/19580873036695-How-to-Cancel-your-Nitro-Subscription",
    darkPatterns: ["Same-Device / Store Cancellation Rule", "Retention & Plan-Switch Prompts"],
    summary: "You generally need to cancel on the same device type (desktop/web vs. mobile) or store (Apple/Google) where you subscribed.",
    steps: [
      "**Desktop / Browser:** Open **User Settings** (gear icon) > **Subscriptions** > click **Cancel** on your Nitro or Nitro Basic banner and skip retention offers.",
      "**Mobile App:** Tap your **Profile / Avatar** > **Settings** (gear icon) > **Billing Settings** > **Manage Nitro** (or **Subscriptions**) and cancel.",
      "**Apple / Google Play:** If billed via iOS or Android store billing, cancel under your **Apple ID Subscriptions** or **Google Play Subscriptions**."
    ],
    paymentTip: "If you change your mind before the billing period ends, you can reactivate directly inside Discord's Subscriptions tab.",
    supportScript: null
  },
  {
    id: "free-fire-membership",
    name: "Free Fire Membership (Weekly / Monthly)",
    category: "Gaming Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://play.google.com/store/account/subscriptions",
    darkPatterns: ["Store vs. In-Game Billing", "Uninstalling Game Doesn't Cancel", "Multi-Account Mix-Up"],
    summary: "Recurring Free Fire memberships billed through Google Play or the App Store must be cancelled in your store subscription settings—uninstalling the game will not stop renewals.",
    steps: [
      "Open **Google Play Store** (Android) or **Settings > [Your Name] > Subscriptions** (iOS) using the store account that paid for the membership.",
      "Locate the **Free Fire** subscription or membership entry in your active subscriptions list.",
      "Tap **Cancel subscription** (or **Cancel Subscription**) and confirm before your next billing cycle."
    ],
    paymentTip: "If you used UPI AutoPay or a specific Google/Apple account for the membership, double-check that exact account and cancel at least 48 hours before renewal.",
    supportScript: null
  },
  {
    id: "roblox-premium",
    name: "Roblox Premium",
    category: "Gaming Subscriptions",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.roblox.com/my/account#!/subscriptions",
    darkPatterns: ["Platform-Specific Cancellation Split", "Resubscribe Option Restrictions", "In-App vs. Browser Lock"],
    summary: "Where you cancel Roblox Premium depends on whether you subscribed via web/desktop, Google Play, or Apple's App Store.",
    steps: [
      "**Web / Desktop:** Sign in to your Roblox account, open **Settings (gear icon) > Subscriptions**, and select **Cancel Renewal**.",
      "**Android / Google Play:** Open **Google Play Store > Profile icon > Payments & subscriptions > Subscriptions**, select **Roblox**, and cancel.",
      "**iOS / Apple:** Open **Settings > [Your Name] > Subscriptions**, select **Roblox**, and tap **Cancel Subscription**."
    ],
    paymentTip: "Cancel before the renewal date to avoid another billing cycle, and keep in mind that cancelling certain Roblox memberships can affect re-subscribing or benefit tiers later.",
    supportScript: null
  },
  {
    id: "fortnite-crew",
    name: "Fortnite Crew",
    category: "Gaming Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.fortnite.com/fortnite-crew-subscription",
    darkPatterns: ["Platform Store Billing Split", "Tenure Tier Tracking"],
    summary: "Manage or cancel Fortnite Crew through the platform or store account where the recurring subscription is billed.",
    steps: [
      "Identify which platform handles your Fortnite Crew billing (such as **Epic Games**, **PlayStation**, **Xbox**, **Nintendo**, or a mobile store).",
      "Open that platform's account **Subscriptions** settings and select **Fortnite Crew**.",
      "Choose **Cancel subscription** / turn off auto-renewal and confirm before your next billing date."
    ],
    paymentTip: "You keep claimed rewards and pass access through the end of the current billing cycle after cancelling.",
    supportScript: null
  },
  {
    id: "world-of-warcraft",
    name: "World of Warcraft Subscription",
    category: "Gaming Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://account.battle.net/",
    darkPatterns: ["Third-Party Store Billing Split", "No Pause Option (Cancel & Resubscribe)"],
    summary: "Cancel recurring World of Warcraft game time from your Battle.net account—or in your external store account if billed elsewhere.",
    steps: [
      "Sign in to your **Battle.net** account at `account.battle.net` and go to **Games & Subscriptions**.",
      "Click **Manage** next to your **World of Warcraft** account and select **Cancel Subscription**.",
      "If billed through a third-party store (such as Amazon), cancel under that store's **Memberships & Subscriptions** instead."
    ],
    paymentTip: "World of Warcraft does not offer a temporary pause toggle—cancel to stop auto-renewal, play until your remaining paid game time runs out, and resubscribe whenever you return.",
    supportScript: null
  },
  {
    id: "grab-unlimited",
    name: "GrabUnlimited",
    category: "Ride-Hailing & Delivery",
    region: "Southeast Asia",
    difficulty: "Easy",
    estimatedTime: "2–3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://help.grab.com/",
    darkPatterns: ["Free Trial Auto-Renewal", "Cross-Border Account Confusion"],
    summary: "Cancel recurring GrabUnlimited subscription plans from your Grab app settings or Help Center before the next billing cycle.",
    steps: [
      "Open the **Grab** app and go to your profile/account **Settings**.",
      "Open **Subscription** (or **My Subscriptions**), select your active **GrabUnlimited** plan, and choose **Cancel Subscription**.",
      "Confirm cancellation and check the **Grab Help Center** in-app if a promotional package or regional plan needs extra support."
    ],
    paymentTip: "Fixed-duration Grab packages generally cannot be cancelled mid-cycle, whereas recurring subscription plans can be cancelled before renewal.",
    supportScript: null
  },
  {
    id: "line-music",
    name: "LINE MUSIC",
    category: "Music & Messaging Add-Ons",
    region: "Japan & Asia",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://help2.line.me/LINEMusic/ios/pc?lang=en&contentId=10009638",
    darkPatterns: ["Carrier vs. Store vs. LINE STORE Split", "Trial Ticket Cutoff"],
    summary: "Where you cancel LINE MUSIC depends on whether you subscribed through LINE STORE, Google Play, Apple, or a mobile carrier like SoftBank.",
    steps: [
      "In **LINE MUSIC**, open **Home > profile photo** (or **Library > Settings**) > **My Ticket** to check where your plan was purchased.",
      "**LINE STORE:** Log in to **LINE STORE** with your LINE account > **Subscription plans** > select **Disable auto-renewal** under LINE MUSIC.",
      "**Google Play / Carrier:** Manage via **Google Play Subscriptions** or log in to your carrier portal (such as SoftBank, Y! mobile, or LINEMO) if billed through a carrier."
    ],
    paymentTip: "Cancelling during a promotional trial stops future auto-renewal and ends remaining monthly free ticket grants in subsequent cycles.",
    supportScript: null
  },
  {
    id: "kakaotalk-emoticon-plus",
    name: "KakaoTalk Emoticon Plus",
    category: "Messaging & Stickers",
    region: "South Korea",
    difficulty: "Easy",
    estimatedTime: "2–3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://e.kakao.com/my/product/001",
    darkPatterns: ["Store vs. Kakao Web Billing Split", "Monthly Auto-Renewal"],
    summary: "Cancel KakaoTalk Emoticon Plus through Kakao Emoticon Shop or the app store account that handles your monthly billing.",
    steps: [
      "Check whether your **Emoticon Plus** pass is billed via **Kakao Emoticon Shop** or your mobile app store (**Google Play** / **App Store**).",
      "Open your **Subscriptions** list in **Google Play**, **iOS Settings**, or your Kakao subscription management page and select **Cancel subscription**.",
      "Confirm the cancellation so monthly renewals stop at the end of the current billing period."
    ],
    paymentTip: "If you are using a desktop browser, managing subscriptions on web/PC can sometimes be quicker than navigating smaller mobile menus.",
    supportScript: null
  },
  {
    id: "naver-pass-membership",
    name: "Naver Pass / Subscription",
    category: "Regional Platforms & Tools",
    region: "South Korea",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://help.naver.com/service/30043/contents/23734?lang=en&osType=COMMONOS",
    darkPatterns: ["Active Pass Blocks Account Deletion", "Team / Store Billing Split"],
    summary: "Cancel active Naver subscription passes in your Pass Management settings—and cancel paid passes before attempting account deletion.",
    steps: [
      "Sign in to your **Naver** account and open the **Pass Management** menu for your service.",
      "Click **More** next to your active pass to cancel the subscription, or leave/unlink team membership under **Team Management** if part of a team plan.",
      "If billed through **Google Play** or the **App Store**, also verify cancellation inside that store's subscription settings."
    ],
    paymentTip: "Naver blocks account deletion while a paid pass is active or overdue—cancel the pass first and confirm no pending charges remain.",
    supportScript: null
  },
  {
    id: "mercado-libre-pago-subscriptions",
    name: "Mercado Libre / Mercado Pago Subscriptions",
    category: "Commerce & Payments",
    region: "Latin America",
    difficulty: "Easy",
    estimatedTime: "2–3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.mercadopago.com.br/developers/en/docs/subscription-plans/manage-subscription-plan",
    darkPatterns: ["Bundle vs. Standalone Billing", "Auto-Renewal Across Partner Services"],
    summary: "Cancel recurring subscriptions or trial plans managed through your Mercado Libre / Mercado Pago account before the next renewal date.",
    steps: [
      "Sign in to your **Mercado Pago** or **Mercado Libre** account and open the menu (**More / Subscriptions** or your subscriptions/plan management section).",
      "Select the active subscription or free trial you want to stop.",
      "Choose **Cancel subscription** (or cancel the free trial) and confirm."
    ],
    paymentTip: "You keep access through the end of the period you already paid for, and refunds depend on the payment method used.",
    supportScript: null
  },
  {
    id: "deezer",
    name: "Deezer",
    category: "Music & Audio Streaming",
    region: "Europe & Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.deezer.com/hc/en-gb/articles/214349245-Cancel-Your-Deezer-Subscription",
    darkPatterns: ["Store / Carrier / PayPal Split", "Plan-Switch Prompts", "Downloads Locked at Expiry"],
    summary: "Cancel directly in Deezer on web, Android, or iOS—unless your plan is billed through Apple, PayPal, or a mobile carrier bundle.",
    steps: [
      "**Web / Desktop:** Log in at `deezer.com` > open your **profile / Account Settings > Manage my subscription > Cancel my subscription** > pick a reason and confirm.",
      "**Android:** Open **Settings (gear icon) > My Subscription Plan > Manage my subscription > Cancel subscription** and confirm.",
      "**iOS / Apple / Carrier / PayPal:** On iOS, go to **Settings > Subscription > Plan management > Subscription details & invoices > Cancel my subscription**—or cancel inside Apple Subscriptions, PayPal Automatic Payments, or your carrier account if billed there."
    ],
    paymentTip: "Watch for a cancellation confirmation email; if you paid via PayPal or a carrier, confirm that both the partner billing agreement and Deezer plan status show cancelled.",
    supportScript: null
  },
  {
    id: "blinkist",
    name: "Blinkist",
    category: "Books & Learning Apps",
    region: "Europe & Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.blinkist.com/en/articles/10033387-how-do-i-cancel-my-subscription-or-free-trial",
    darkPatterns: ["24-Hour Trial Cutoff", "Web vs. App Store Split", "Danger Zone Menu Placement"],
    summary: "Web sign-ups are cancelled under Blinkist's account settings, while App Store and Google Play purchases are managed in your device store.",
    steps: [
      "**Web / App (Direct):** Open **Settings** on the Blinkist website or in the app > **Manage Subscription** > scroll to **Danger Zone** > select **Turn off auto-renewal** and confirm.",
      "**Apple App Store / Google Play:** Open your **Apple/iTunes** or **Google Play** subscription settings, select **Blinkist**, and cancel before the renewal or trial deadline."
    ],
    paymentTip: "Cancel at least 24 hours before a trial ends on Apple or Google Play so pre-authorizations or renewal charges do not trigger.",
    supportScript: null
  },
  {
    id: "qobuz",
    name: "Qobuz",
    category: "High-Res Music Streaming",
    region: "Europe & Global",
    difficulty: "Easy",
    estimatedTime: "2–3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://help.qobuz.com/en/articles/10157-how-do-i-cancel-my-subscription",
    darkPatterns: ["Third-Party App Billing Split", "Offline Streaming Ends at Cycle End"],
    summary: "Cancel Qobuz streaming plans from your account on `qobuz.com` or through the third-party app store that handles your billing.",
    steps: [
      "Sign in to your account on `qobuz.com`.",
      "Open the **My Streaming Plan** tab.",
      "Click **Unsubscribe** next to your active subscription and complete the prompts—or cancel in **Apple** / your third-party store if billed there."
    ],
    paymentTip: "Your Qobuz account and library stay accessible, while paid streaming ends at the close of the current billing period.",
    supportScript: null
  },
  {
    id: "notion-plus",
    name: "Notion Plus",
    category: "Workspace & Productivity Tools",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.notion.com",
    darkPatterns: ["Workspace Ownership & Billing Split", "Downgrade vs. Account Deletion"],
    summary: "Downgrade the specific paid Notion workspace to the Free plan in workspace billing settings, or cancel via Apple/Google Play if billed through a mobile store.",
    steps: [
      "**Direct Billing:** Open Notion, select the paid workspace, go to **Settings > Billing** in the sidebar, choose the change-plan option, and select the **Free Plan**.",
      "**Apple / Google Play:** If billed through Apple or Google Play, cancel inside your **iOS Subscriptions** or **Google Play Subscriptions** menu."
    ],
    paymentTip: "Check that you are inside the exact workspace that owns the paid plan before downgrading, and keep your workspace data intact on the Free plan where eligible.",
    supportScript: null
  },
  {
    id: "grammarly-pro",
    name: "Grammarly",
    category: "Writing & Productivity Tools",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://account.grammarly.com",
    darkPatterns: ["Multi-Screen Cancellation Flow", "App Store vs. Direct Billing Split"],
    summary: "Turn off auto-renewal from your Grammarly account subscription page—or in the Apple App Store if purchased through Apple.",
    steps: [
      "**Grammarly Account:** Sign in, open the **Account** tab > **Your account > Subscription**, scroll down, click **Cancel Subscription**, complete the prompts, and confirm.",
      "**Apple App Store:** If billed via Apple, cancel through your **Apple Subscriptions** settings."
    ],
    paymentTip: "Cancelling stops automatic renewal at the end of your current paid period while keeping access active until that date expires.",
    supportScript: null
  },
  {
    id: "genshin-impact-welkin-bp",
    name: "Genshin Impact (Welkin Moon & Battle Pass)",
    category: "Gaming Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://play.google.com/store/account/subscriptions",
    darkPatterns: ["One-Time vs. Store Recurring Billing Split", "Daily Login Requirement for Rewards", "Chargeback Negative Balance Risk"],
    summary: "Direct Welkin Moon and Battle Pass purchases are single-cycle items rather than auto-renewing subscriptions unless set up through a store or recurring billing method—and daily log-ins are required to claim Welkin Primogems.",
    steps: [
      "Check if you have any active recurring subscription tied to **Genshin Impact** or **HoYoverse** in **Google Play Subscriptions**, **Apple Subscriptions**, or your payment method's recurring billing settings.",
      "If billed through a mobile store, select the entry in **Payments & subscriptions > Subscriptions** (Android) or **Settings > [Your Name] > Subscriptions** (iOS) and tap **Cancel subscription**.",
      "For standard one-time **Blessing of the Welkin Moon** or **Battle Pass** top-ups, no recurring cancellation is needed—they run for their fixed duration."
    ],
    paymentTip: "Unclaimed daily Welkin Moon Primogems do not carry over if you miss a day, and requesting chargebacks/refunds on spent currency can trigger negative balance penalties on the game account.",
    supportScript: null
  },
  {
    id: "honkai-star-rail-express-pass",
    name: "Honkai: Star Rail (Express Supply Pass)",
    category: "Gaming Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://play.google.com/store/account/subscriptions",
    darkPatterns: ["Fixed-Cycle Pass vs. Store Billing Split", "Chargeback Currency Deduction Risk"],
    summary: "Express Supply Passes run for a fixed 30-day cycle rather than auto-renewing automatically unless billed via a recurring store/payment plan.",
    steps: [
      "Open **Google Play Store > Profile icon > Payments & subscriptions > Subscriptions** (Android) or **Settings > [Your Name] > Subscriptions** (iOS).",
      "Check if **Honkai: Star Rail** or any related pass appears under active recurring subscriptions and cancel it if present.",
      "If purchased as a standard one-time Express Supply Pass, let the current 30-day window finish without buying another pass."
    ],
    paymentTip: "Avoid disputing or charging back passes after spending Oneiric Shards or Stellar Jade, as currency deductions or negative balances can put your account at risk.",
    supportScript: null
  },
  {
    id: "strava-subscription",
    name: "Strava Subscription",
    category: "Fitness & Tracking Apps",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.strava.com/en-us/articles/15401936-how-do-i-cancel-my-subscription",
    darkPatterns: ["24-Hour Renewal Cutoff", "Store Redirect from Mobile App", "14-Day Direct Refund Window"],
    summary: "Cancel at least 24 hours before renewal on the exact platform where you subscribed—Strava web, Google Play, or Apple App Store.",
    steps: [
      "**Web:** Sign in at `strava.com`, click your **profile picture** (top right) > **Settings > My Account > Cancel Subscription**.",
      "**Android / iOS App:** Open the **You** tab > **Settings (gear icon) > Your Strava Subscription > Manage Your Subscription**, which opens **Google Play** or **Apple Subscriptions** to complete cancellation."
    ],
    paymentTip: "Cancel at least 24 hours ahead of renewal, and note that direct Strava web purchases may qualify for a refund within 14 days while store purchases follow Apple/Google rules.",
    supportScript: null
  },
  {
    id: "duolingo-super",
    name: "Duolingo Super",
    category: "Language & Learning Apps",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.duolingo.com/help/cancel-my-super-duolingo-subscription",
    darkPatterns: ["Platform-Specific Cancellation Split", "Deleting App/Account Doesn't Stop Billing"],
    summary: "Cancel Super Duolingo on the same platform you used to subscribe—Duolingo web settings, Google Play, or Apple App Store.",
    steps: [
      "**Web:** Sign in on a browser, click your **profile picture > Settings > Super Duolingo > Cancel subscription**, and confirm.",
      "**Mobile App:** Tap the **Super icon > Settings (gear icon) > Manage subscription > Cancel subscription**, then confirm via **Google Play** or **Apple App Store**."
    ],
    paymentTip: "Uninstalling the app or deleting your Duolingo account does not cancel an active subscription—always cancel in the billing or store settings first.",
    supportScript: null
  },
  {
    id: "coursera-plus",
    name: "Coursera Plus",
    category: "Online Learning & Courses",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.coursera.support/s/article/learner-000001189",
    darkPatterns: ["Multiple Subscription Entries", "Store vs. Web Billing Split", "Retention & Pause Prompts"],
    summary: "Cancel Coursera Plus or specialization subscriptions under My Purchases on Coursera.org—or inside Apple/Google Play if billed through a mobile store.",
    steps: [
      "**Web (coursera.org):** Sign in, click your **profile icon** (top right) > **My Purchases**, find your active subscription under **Subscriptions**, and click **Cancel subscription**.",
      "**Prompts & Confirmation:** Decline any pause or discount offers if you want to cancel completely, pick a reason, and confirm until you see the end-of-cycle date and confirmation email.",
      "**Apple / Google Play:** If billed via iOS or Android store billing, cancel inside **Settings > [Your Name] > Subscriptions** or **Google Play > Payments & subscriptions > Subscriptions** instead."
    ],
    paymentTip: "Individual single-course purchases are one-time payments rather than recurring subscriptions, and if you hold multiple subscriptions (such as Coursera Plus plus a separate certificate), each one must be cancelled separately.",
    supportScript: null
  },
  {
    id: "audible-membership",
    name: "Audible Membership",
    category: "Audiobooks & Audio",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.audible.com/help/article/cancel-membership",
    darkPatterns: ["Unused Credits Forfeited on Cancel", "Plus Catalogue Titles Locked", "Store vs. Web Billing Split"],
    summary: "Cancel Audible membership on the Audible website under Account/Membership details—or through Apple/Google Play if billed via a mobile store—and spend any credits first.",
    steps: [
      "**Audible Website:** Sign in with your Amazon/Audible account, open your **profile/username menu** (or hamburger menu on mobile web) > **View membership details** / **Membership details**.",
      "Select **Cancel membership** (or **Cancel**) and follow the confirmation prompts until cancellation is complete.",
      "**App Store / Google Play:** If billed through Apple or Google Play, cancel inside your **App Store** or **Google Play** subscription settings."
    ],
    paymentTip: "Unused membership credits expire upon cancellation (or by their issue expiry window), and Plus Catalogue titles lock at cycle end—while audiobooks bought with credits or cash remain yours in your library.",
    supportScript: null
  },
  {
    id: "crunchyroll-membership",
    name: "Crunchyroll Membership",
    category: "Anime & Entertainment Streaming",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://help.crunchyroll.com/article/how-do-i-cancel-my-membership",
    darkPatterns: ["Billing Provider Lock (Web vs. App/Store/Partner)", "Retention & Pause Screens", "App Deletion Doesn't Cancel"],
    summary: "Cancel Crunchyroll through the exact billing source you used—Crunchyroll web Membership Info, the mobile app/store, or a partner platform like Amazon, Roku, PlayStation, or YouTube.",
    steps: [
      "**Web (Direct Billing):** Log in at `crunchyroll.com`, click your **profile icon** (top right) > **Settings > Membership Info > Cancel Subscription**, and confirm.",
      "**Mobile App / Apple / Google:** If subscribed through iOS or Android, open **Profile > Membership > Manage > Cancel Subscription** (or manage via **Apple Subscriptions** / **Google Play Subscriptions**).",
      "**Partner / TV Platforms:** If billed via **Amazon**, **Roku**, **PlayStation**, or **YouTube Primetime Channels**, cancel inside that platform's subscription settings."
    ],
    paymentTip: "Deleting the app or logging out does not stop billing, and gift-card-only memberships without a payment method end automatically when the gift period finishes.",
    supportScript: null
  },
  {
    id: "masterclass-membership",
    name: "MasterClass Membership",
    category: "Online Learning & Courses",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.masterclass.com/help-center/masterclass/answers/cancelling-your-subscription-renewal--id--M2McWBvNTh-WNRR6llmkAw",
    darkPatterns: ["Browser-Only Direct Cancellation", "App Redirect Prompt on Mobile", "Store Billing Split"],
    summary: "Direct MasterClass auto-renewal is cancelled in a web browser at `masterclass.com` rather than inside the MasterClass app—or through Apple/Google Play if store-billed.",
    steps: [
      "**Web / Mobile Browser:** Sign in at `masterclass.com` in a browser (ignore any prompt to open the app), click your **profile/account menu** (top right) > **Settings**.",
      "Under **Membership** in Account Settings, select **Cancel Membership**, then choose **Cancel Now** to confirm.",
      "**Apple / Google Play:** If purchased through the iOS App Store or Google Play Store, cancel inside that store's **Subscriptions** settings."
    ],
    paymentTip: "You retain access through your current renewal date and can reactivate in settings later if you change your mind.",
    supportScript: null
  },
  {
    id: "adobe-after-effects",
    name: "Adobe After Effects",
    category: "Video & Motion Editing Apps",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://helpx.adobe.com/in/account/individual/subscriptions-and-plans/renewals-and-cancellations/cancel-adobe-subscription.html",
    darkPatterns: ["Annual Paid Monthly Early Termination Fee", "Retention & Offer Screens", "Third-Party Billing Split"],
    summary: "Cancel Adobe After Effects (or the bundle containing it) through your Adobe Account under Plans & Payment, or via the third-party reseller if billed externally.",
    steps: [
      "Sign in to your **Adobe Account** using the Adobe ID linked to your After Effects plan.",
      "Go to **Plans & Payment**, find your **After Effects** or **Creative Cloud** plan, and click **Manage plan** > **Cancel your plan**.",
      "Select a reason, review any refund or early termination terms shown on screen, and confirm cancellation until you receive a confirmation email."
    ],
    paymentTip: "Cancelling within 14 days of initial purchase typically qualifies for a full refund, whereas cancelling an annual plan billed monthly after 14 days can trigger an early termination fee.",
    supportScript: null
  },
  {
    id: "adobe-premiere-pro",
    name: "Adobe Premiere Pro",
    category: "Video & Motion Editing Apps",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://helpx.adobe.com/in/account/individual/subscriptions-and-plans/renewals-and-cancellations/cancel-adobe-subscription.html",
    darkPatterns: ["Annual Paid Monthly Early Termination Fee", "Retention & Offer Screens", "Third-Party Billing Split"],
    summary: "Cancel Adobe Premiere Pro (or the Creative Cloud bundle containing it) in your Adobe Account under Plans and payment—or through your third-party billing provider if purchased externally.",
    steps: [
      "Sign in to your **Adobe Account** using the Adobe ID linked to your Premiere Pro plan.",
      "Open **Plans and payment**, locate your **Premiere Pro** or **Creative Cloud** subscription, and select **Manage plan**.",
      "Select **Cancel your plan**, choose a cancellation reason, review any refund or early termination terms displayed, and confirm until you receive a confirmation email."
    ],
    paymentTip: "Cancelling within 14 days of initial purchase typically qualifies for a full refund, whereas cancelling an annual plan billed monthly after 14 days can trigger an early termination fee (often 50% of the remaining balance).",
    supportScript: null
  },
  {
    id: "adobe-photoshop",
    name: "Adobe Photoshop",
    category: "Design & Creative Software",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://helpx.adobe.com/in/account/individual/subscriptions-and-plans/renewals-and-cancellations/cancel-adobe-subscription.html",
    darkPatterns: ["Annual Paid Monthly Early Termination Fee", "Retention & Offer Screens", "Third-Party Billing Split"],
    summary: "Cancel Adobe Photoshop or the Creative Cloud bundle including it from Plans and payment in your Adobe Account—or through Apple/Google Play/reseller if billed externally.",
    steps: [
      "Sign in to your **Adobe Account** (`account.adobe.com`) using the Adobe ID linked to your Photoshop subscription.",
      "Open **Plans and payment**, locate your **Photoshop** or **Creative Cloud** plan, and click **Manage plan**.",
      "Select **Cancel your plan**, review any cancellation or refund terms shown, choose a reason, and confirm until you receive a confirmation email."
    ],
    paymentTip: "Cancelling within 14 days of initial purchase typically provides a full refund, whereas cancelling an annual plan billed monthly after 14 days can trigger an early termination fee.",
    supportScript: null
  },
  {
    id: "adobe-illustrator",
    name: "Adobe Illustrator",
    category: "Design & Creative Software",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://helpx.adobe.com/in/account/individual/subscriptions-and-plans/renewals-and-cancellations/cancel-adobe-subscription.html",
    darkPatterns: ["Annual Paid Monthly Early Termination Fee", "Multi-Step Retention Screens", "Cloud Storage Quota Drop"],
    summary: "Cancel Adobe Illustrator (or the Creative Cloud plan that includes it) under Plans and payment in your Adobe Account.",
    steps: [
      "Sign in to your **Adobe Account** (`account.adobe.com`) with the Adobe ID that owns the Illustrator plan.",
      "Go to **Plans and payment**, choose **Manage plan** on your Illustrator or Creative Cloud subscription, and select **Cancel your plan**.",
      "Follow the confirmation screens through to completion and verify cancellation via your account page or confirmation email."
    ],
    paymentTip: "Download any files stored in Adobe cloud storage before your plan ends if they exceed free tier limits, and check annual term rules before cancelling mid-contract.",
    supportScript: null
  },
  {
    id: "adobe-indesign",
    name: "Adobe InDesign",
    category: "Design & Creative Software",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://helpx.adobe.com/in/account/individual/subscriptions-and-plans/renewals-and-cancellations/cancel-adobe-subscription.html",
    darkPatterns: ["Annual Paid Monthly Early Termination Fee", "Retention & Offer Prompts", "Third-Party Billing Split"],
    summary: "Cancel Adobe InDesign or your Creative Cloud plan through Plans and payment in your Adobe Account.",
    steps: [
      "Sign in to **Adobe Account** (`account.adobe.com`) using the Adobe ID tied to your InDesign subscription.",
      "Navigate to **Plans and payment**, select **Manage plan** next to your InDesign or Creative Cloud subscription, and click **Cancel your plan**.",
      "Complete the reason prompt, review any applicable fees or end dates, and confirm cancellation."
    ],
    paymentTip: "On an annual plan billed monthly, cancelling after 14 days can incur a fee based on the remaining contract balance while access runs through the current billing period.",
    supportScript: null
  },
  {
    id: "adobe-express",
    name: "Adobe Express",
    category: "Design & Productivity Tools",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://helpx.adobe.com/in/account/individual/subscriptions-and-plans/renewals-and-cancellations/cancel-adobe-subscription.html",
    darkPatterns: ["App Store vs. Web Billing Split", "Retention & Plan-Change Prompts"],
    summary: "Cancel paid Adobe Express plans via Plans and payment in your Adobe Account—or inside Apple/Google Play if subscribed through a mobile app store.",
    steps: [
      "**Web / Adobe Account:** Sign in at `account.adobe.com`, go to **Plans and payment**, and click **Manage plan** next to Adobe Express.",
      "Select **Cancel your plan**, decline any retention offer if you want to cancel fully, and confirm cancellation.",
      "**Mobile Store:** If billed via Apple or Google Play, cancel in **Settings > [Your Name] > Subscriptions** or **Google Play > Payments & subscriptions > Subscriptions**."
    ],
    paymentTip: "Make sure you check the exact email/Adobe ID and store account used when upgrading, as mobile store purchases do not cancel from the Adobe web portal alone.",
    supportScript: null
  },
  {
    id: "adobe-acrobat",
    name: "Adobe Acrobat",
    category: "Productivity & PDF Tools",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://helpx.adobe.com/in/account/individual/subscriptions-and-plans/renewals-and-cancellations/cancel-adobe-subscription.html",
    darkPatterns: ["Annual Paid Monthly Early Termination Fee", "Retention & Offer Screens", "App Store / Google Play Billing Split"],
    summary: "Cancel Adobe Acrobat subscriptions from your Adobe Account under Plans and payment—or inside Apple/Google Play if billed through a mobile app store.",
    steps: [
      "**Web / Adobe Account:** Sign in at `account.adobe.com` using the Adobe ID linked to your Acrobat plan.",
      "Open **Plans and payment**, find your **Acrobat** plan, and click **Manage plan** > **Cancel your plan**.",
      "Choose a reason, review any refund or early termination terms shown, and confirm until cancellation completes—or cancel in **Apple/Google Play Subscriptions** if billed via a mobile store."
    ],
    paymentTip: "Cancelling within 14 days of initial purchase typically qualifies for a full refund, whereas cancelling an annual commitment billed monthly after 14 days can trigger an early termination fee.",
    supportScript: null
  },
  {
    id: "adobe-firefly",
    name: "Adobe Firefly",
    category: "AI & Generative Creative Tools",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://helpx.adobe.com/in/account/individual/subscriptions-and-plans/renewals-and-cancellations/cancel-adobe-subscription.html",
    darkPatterns: ["Generative Credit Meter & Plan Tie-In", "Retention & Offer Screens"],
    summary: "Cancel a paid Adobe Firefly plan (or the Creative Cloud subscription providing generative credits) from Plans and payment in your Adobe Account.",
    steps: [
      "Sign in to your **Adobe Account** (`account.adobe.com`) using the Adobe ID tied to your Firefly plan.",
      "Go to **Plans and payment** and select **Manage plan** next to your Firefly or Creative Cloud subscription.",
      "Click **Cancel your plan**, follow the prompts through to confirmation, and save the confirmation notice."
    ],
    paymentTip: "Cancelling stops future renewals and resets paid generative credit allowances at the end of your current billing period.",
    supportScript: null
  },
  {
    id: "adobe-stock",
    name: "Adobe Stock",
    category: "Design & Creative Software",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://helpx.adobe.com/in/account/individual/subscriptions-and-plans/renewals-and-cancellations/cancel-adobe-subscription.html",
    darkPatterns: ["Unused Rollover Asset Expiry on Cancel", "Annual Commitment Early Termination Fee", "Retention Screens"],
    summary: "Cancel your Adobe Stock plan in your Adobe Account under Plans and payment—and download available stock assets before cancellation takes effect.",
    steps: [
      "Sign in to your **Adobe Account** (`account.adobe.com`) with the account that holds the Adobe Stock plan.",
      "Open **Plans and payment**, locate your **Adobe Stock** subscription, and click **Manage plan**.",
      "Choose **Cancel your plan**, complete the prompts, and confirm cancellation."
    ],
    paymentTip: "Any unused Adobe Stock assets or credits under a subscription typically expire when the plan cancels, so license and download needed assets first.",
    supportScript: null
  },
  {
    id: "adobe-substance-3d",
    name: "Adobe Substance 3D",
    category: "3D & Creative Software",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://helpx.adobe.com/in/account/individual/subscriptions-and-plans/renewals-and-cancellations/cancel-adobe-subscription.html",
    darkPatterns: ["Annual Paid Monthly Early Termination Fee", "Retention & Offer Screens"],
    summary: "Cancel your Substance 3D plan or bundle through Plans and payment in your Adobe Account.",
    steps: [
      "Sign in to your **Adobe Account** (`account.adobe.com`) using the Adobe ID linked to your Substance 3D plan.",
      "Navigate to **Plans and payment** and select **Manage plan** on your Substance 3D subscription.",
      "Click **Cancel your plan**, follow the steps on screen, and confirm until you see the cancellation confirmation."
    ],
    paymentTip: "If you are on an annual plan billed monthly, check the cancellation screen for any early termination fee after the initial 14-day window.",
    supportScript: null
  },
  {
    id: "adobe-frame-io",
    name: "Adobe Frame.io",
    category: "Video & Motion Editing Apps",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://helpx.adobe.com/in/account/individual/subscriptions-and-plans/renewals-and-cancellations/cancel-adobe-subscription.html",
    darkPatterns: ["Adobe Account vs. Legacy Workspace Billing Split", "Team Role Permissions"],
    summary: "Cancel Frame.io plans billed through Adobe under Plans and payment in your Adobe Account, or check workspace billing settings if managed separately.",
    steps: [
      "Sign in to your **Adobe Account** (`account.adobe.com`) with the Adobe ID associated with your Frame.io subscription.",
      "Open **Plans and payment**, select **Manage plan** next to Frame.io (or your Creative Cloud plan), and choose **Cancel your plan**.",
      "Confirm the cancellation prompts and check that your billing status updates."
    ],
    paymentTip: "Export any review comments, versions, or project files you need before access changes at the end of your billing cycle.",
    supportScript: null
  },
  {
    id: "adobe-audition",
    name: "Adobe Audition",
    category: "Audio & Sound Editing Apps",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://helpx.adobe.com/in/account/individual/subscriptions-and-plans/renewals-and-cancellations/cancel-adobe-subscription.html",
    darkPatterns: ["Annual Paid Monthly Early Termination Fee", "Retention & Offer Screens", "Bundle Tie-In"],
    summary: "Cancel Adobe Audition (or the Creative Cloud subscription containing it) under Plans and payment in your Adobe Account.",
    steps: [
      "Sign in to your **Adobe Account** (`account.adobe.com`) using the Adobe ID linked to your Audition plan.",
      "Open **Plans and payment**, locate your **Audition** or **Creative Cloud** plan, and click **Manage plan**.",
      "Select **Cancel your plan**, choose a reason, review any refund or early termination terms shown, and confirm until you receive a confirmation email."
    ],
    paymentTip: "Cancelling within 14 days of initial purchase typically provides a full refund, whereas cancelling an annual plan billed monthly after 14 days can trigger an early termination fee.",
    supportScript: null
  },
  {
    id: "adobe-dreamweaver",
    name: "Adobe Dreamweaver",
    category: "Web & Code Design Tools",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://helpx.adobe.com/in/account/individual/subscriptions-and-plans/renewals-and-cancellations/cancel-adobe-subscription.html",
    darkPatterns: ["Annual Paid Monthly Early Termination Fee", "Retention & Offer Screens"],
    summary: "Cancel Adobe Dreamweaver or your Creative Cloud plan through Plans and payment in your Adobe Account.",
    steps: [
      "Sign in to your **Adobe Account** (`account.adobe.com`) with the Adobe ID that owns the Dreamweaver subscription.",
      "Go to **Plans and payment**, select **Manage plan** next to your Dreamweaver or Creative Cloud plan, and click **Cancel your plan**.",
      "Follow the on-screen prompts through to confirmation and verify cancellation via your account page or confirmation email."
    ],
    paymentTip: "Check your billing terms before cancelling annual commitments billed monthly, as early cancellation after 14 days can carry a fee while local site and code files stay on your machine.",
    supportScript: null
  },
  {
    id: "adobe-character-animator",
    name: "Adobe Character Animator",
    category: "Video & Motion Editing Apps",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://helpx.adobe.com/in/account/individual/subscriptions-and-plans/renewals-and-cancellations/cancel-adobe-subscription.html",
    darkPatterns: ["Annual Paid Monthly Early Termination Fee", "Retention & Offer Screens", "Bundle Tie-In"],
    summary: "Cancel Adobe Character Animator (or the Creative Cloud plan including it) from Plans and payment in your Adobe Account.",
    steps: [
      "Sign in to your **Adobe Account** (`account.adobe.com`) using the Adobe ID linked to your subscription.",
      "Open **Plans and payment**, find your **Character Animator** or **Creative Cloud** plan, and click **Manage plan** > **Cancel your plan**.",
      "Select a cancellation reason, review any applicable terms, and confirm until cancellation completes."
    ],
    paymentTip: "Back up puppet rigs, project files, and cloud assets you need before your subscription ends, and check annual contract terms for early termination fees.",
    supportScript: null
  },
  {
    id: "adobe-animate",
    name: "Adobe Animate",
    category: "2D Animation & Creative Tools",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://helpx.adobe.com/in/account/individual/subscriptions-and-plans/renewals-and-cancellations/cancel-adobe-subscription.html",
    darkPatterns: ["Annual Paid Monthly Early Termination Fee", "Retention & Offer Screens", "Bundle Tie-In"],
    summary: "Cancel Adobe Animate or your Creative Cloud subscription via Plans and payment in your Adobe Account.",
    steps: [
      "Sign in to your **Adobe Account** (`account.adobe.com`) with the Adobe ID linked to your Animate plan.",
      "Navigate to **Plans and payment**, select **Manage plan** on your Animate or Creative Cloud plan, and choose **Cancel your plan**.",
      "Complete the reason prompt, review any cancellation terms shown, and confirm cancellation."
    ],
    paymentTip: "Cancelling within 14 days of initial purchase generally qualifies for a full refund, while cancelling an annual commitment billed monthly after 14 days can incur an early termination fee.",
    supportScript: null
  },
  {
    id: "adobe-fresco",
    name: "Adobe Fresco",
    category: "Drawing & Painting Apps",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://helpx.adobe.com/in/account/individual/subscriptions-and-plans/renewals-and-cancellations/cancel-adobe-subscription.html",
    darkPatterns: ["App Store / Google Play Billing Split", "Retention & Offer Screens"],
    summary: "Cancel paid Adobe Fresco access under Plans and payment in your Adobe Account—or inside Apple/Google Play if billed through a mobile store.",
    steps: [
      "**Web / Adobe Account:** Sign in at `account.adobe.com` with the Adobe ID linked to your Fresco or Creative Cloud plan.",
      "Open **Plans and payment**, select **Manage plan** next to your plan, and click **Cancel your plan**.",
      "**Mobile Store:** If subscribed via iOS or Android billing, cancel inside **Apple Subscriptions** or **Google Play Subscriptions**."
    ],
    paymentTip: "If you use Fresco as part of a Creative Cloud bundle, cancelling the standalone upgrade or bundle stops future renewals while local artwork remains on your device.",
    supportScript: null
  },
  {
    id: "adobe-incopy",
    name: "Adobe InCopy",
    category: "Design & Creative Software",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://helpx.adobe.com/in/account/individual/subscriptions-and-plans/renewals-and-cancellations/cancel-adobe-subscription.html",
    darkPatterns: ["Annual Paid Monthly Early Termination Fee", "Retention & Offer Screens", "Team Seat Management"],
    summary: "Cancel an individual Adobe InCopy subscription from Plans and payment in your Adobe Account, or ask your team admin if assigned via an organization.",
    steps: [
      "Sign in to your **Adobe Account** (`account.adobe.com`) using the Adobe ID that owns the InCopy subscription.",
      "Go to **Plans and payment**, locate your **InCopy** plan, and click **Manage plan**.",
      "Select **Cancel your plan**, complete the cancellation prompts, and confirm until you receive a confirmation email."
    ],
    paymentTip: "Cancelling an annual commitment billed monthly after 14 days can trigger an early termination fee, while editorial text files saved locally stay accessible.",
    supportScript: null
  },
  {
    id: "adobe-premiere-rush",
    name: "Adobe Premiere Rush",
    category: "Video & Motion Editing Apps",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://helpx.adobe.com/in/account/individual/subscriptions-and-plans/renewals-and-cancellations/cancel-adobe-subscription.html",
    darkPatterns: ["App Store / Google Play Billing Split", "Retention & Offer Screens"],
    summary: "Cancel paid Premiere Rush or Creative Cloud billing under Plans and payment in your Adobe Account—or inside Apple/Google Play if store-billed.",
    steps: [
      "**Web / Adobe Account:** Sign in at `account.adobe.com` with the Adobe ID linked to your subscription.",
      "Navigate to **Plans and payment**, select **Manage plan**, and choose **Cancel your plan**.",
      "**Mobile Store:** If billed via Apple App Store or Google Play Store, manage and cancel inside your device's **Subscriptions** settings."
    ],
    paymentTip: "Confirm whether billing is handled by Adobe or a mobile app store before looking for the cancellation link, as store subscriptions must be cancelled in the store.",
    supportScript: null
  },
  {
    id: "adobe-captivate",
    name: "Adobe Captivate",
    category: "eLearning & Authoring Tools",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://helpx.adobe.com/in/account/individual/subscriptions-and-plans/renewals-and-cancellations/cancel-adobe-subscription.html",
    darkPatterns: ["Annual Commitment Terms", "Team / Enterprise Admin Billing Split", "Retention Screens"],
    summary: "Cancel individual Adobe Captivate plans in your Adobe Account under Plans and payment—or contact your organization's license administrator for team plans.",
    steps: [
      "Sign in to your **Adobe Account** (`account.adobe.com`) using the Adobe ID associated with your Captivate plan.",
      "Open **Plans and payment**, find your **Captivate** subscription, and click **Manage plan**.",
      "Select **Cancel your plan**, review any renewal or early termination terms displayed, and confirm cancellation."
    ],
    paymentTip: "If your Captivate license is managed by a company or school admin rather than an individual billing profile, request cancellation or seat removal from your administrator.",
    supportScript: null
  },
  {
    id: "adobe-bridge",
    name: "Adobe Bridge",
    category: "Asset & Media Management Apps",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://helpx.adobe.com/in/account/individual/subscriptions-and-plans/renewals-and-cancellations/cancel-adobe-subscription.html",
    darkPatterns: ["Bundle Tie-In", "Retention & Offer Screens"],
    summary: "Cancel the Creative Cloud or subscription plan tied to Adobe Bridge under Plans and payment in your Adobe Account.",
    steps: [
      "Sign in to your **Adobe Account** (`account.adobe.com`) using the Adobe ID linked to your Bridge subscription.",
      "Open **Plans and payment**, locate the active plan that provides **Adobe Bridge**, and select **Manage plan**.",
      "Choose **Cancel your plan**, complete the cancellation reason and confirmation screens, and save your confirmation email."
    ],
    paymentTip: "Most plans cancelled within 14 days of initial purchase qualify for a full refund, while cancelling an annual plan billed monthly after 14 days can trigger an early termination fee.",
    supportScript: null
  },
  {
    id: "adobe-dimension",
    name: "Adobe Dimension",
    category: "3D & Creative Software",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://helpx.adobe.com/in/account/individual/subscriptions-and-plans/renewals-and-cancellations/cancel-adobe-subscription.html",
    darkPatterns: ["Annual Paid Monthly Early Termination Fee", "Retention & Offer Screens", "Bundle Tie-In"],
    summary: "Cancel the subscription or Creative Cloud plan covering Adobe Dimension via Plans and payment in your Adobe Account.",
    steps: [
      "Sign in to your **Adobe Account** (`account.adobe.com`) with the Adobe ID that owns your Dimension plan.",
      "Go to **Plans and payment**, select **Manage plan** on your subscription, and click **Cancel your plan**.",
      "Follow the prompts through to confirmation and verify cancellation on your account page or in your email."
    ],
    paymentTip: "Cancelling an annual plan billed monthly after 14 days can incur an early termination fee of 50% of the remaining contract balance, while local 3D scenes stay on your device.",
    supportScript: null
  },
  {
    id: "adobe-sign",
    name: "Adobe Sign",
    category: "Productivity & eSignature Tools",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://helpx.adobe.com/in/account/individual/subscriptions-and-plans/renewals-and-cancellations/cancel-adobe-subscription.html",
    darkPatterns: ["Annual Contract Terms", "Admin & Team Billing Split", "Retention Screens"],
    summary: "Cancel individual Adobe Sign plans under Plans and payment in your Adobe Account, or contact your organization's admin for team or enterprise accounts.",
    steps: [
      "Sign in to your **Adobe Account** (`account.adobe.com`) using the Adobe ID associated with your Adobe Sign subscription.",
      "Open **Plans and payment**, select **Manage plan** next to your Adobe Sign plan, and click **Cancel your plan**.",
      "Select a reason, review any cancellation or contract terms shown, and confirm cancellation."
    ],
    paymentTip: "Download copies of completed agreements and audit trails before cancelling, and verify whether your license is self-managed or controlled by an organizational admin.",
    supportScript: null
  },
  {
    id: "adobe-experience-manager",
    name: "Adobe Experience Manager",
    category: "Enterprise & Experience Tools",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "5+ mins",
    lastVerified: "Nov 2026",
    directUrl: "https://helpx.adobe.com/in/account/individual/subscriptions-and-plans/renewals-and-cancellations/cancel-adobe-subscription.html",
    darkPatterns: ["Enterprise Contract Lock-In", "Account Representative / Admin Routing"],
    summary: "Manage or cancel Adobe Experience Manager through your enterprise contract administrator or Adobe Account / support channels rather than a standard self-serve consumer toggle.",
    steps: [
      "Check whether your organization's contract renewal or cancellation is handled by an **Adobe Account Representative** or **Admin Console** administrator.",
      "If you manage an eligible self-serve account, sign in at `account.adobe.com`, go to **Plans and payment**, and check **Manage plan** options.",
      "Submit your cancellation or non-renewal request before the contract notice window closes and save written confirmation."
    ],
    paymentTip: "Enterprise experience tools often have multi-month or annual contract notice windows—submit cancellation or non-renewal requests well ahead of renewal dates.",
    supportScript: null
  },
  {
    id: "google-workspace",
    name: "Google Workspace",
    category: "Business & Productivity Suites",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "5+ mins",
    lastVerified: "Nov 2026",
    directUrl: "https://knowledge.workspace.google.com/admin/billing/cancel-google-workspace",
    darkPatterns: ["Admin Console Gatekeeping", "Annual Commitment Terms", "Irreversible Data Deletion Choices"],
    summary: "Cancel a business Google Workspace subscription from the Google Admin console under Billing > Subscriptions after backing up organization data.",
    steps: [
      "Sign in to the **Google Admin console** (`admin.google.com`) using an administrator account with billing privileges.",
      "Go to **Menu > Billing > Subscriptions**, select your **Google Workspace** subscription, and click **Cancel Subscription**.",
      "Follow the prompts, choose how user or organization data should be handled after cancellation, enter your confirmation email, and click **Cancel My Subscription**."
    ],
    paymentTip: "Export important emails, Drive files, and billing records before cancelling, and check whether your plan is on a flexible monthly schedule or an annual commitment.",
    supportScript: null
  },
  {
    id: "google-workspace-individual",
    name: "Google Workspace Individual",
    category: "Business & Productivity Suites",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.google.com/google-workspace-individual/answer/10758208",
    darkPatterns: ["Non-Refundable Billing Terms", "Retention & Resume Prompts"],
    summary: "Cancel a Google Workspace Individual plan from your subscription management page to stop future renewals while keeping access through the current period.",
    steps: [
      "Sign in with the Google Account tied to your **Google Workspace Individual** subscription and open your subscription management page.",
      "Under **Upcoming Payment**, select **Cancel subscription**.",
      "Answer the cancellation prompts and click **Finalize cancellation**, then check for the confirmation email."
    ],
    paymentTip: "Google Workspace Individual subscriptions are generally non-refundable, so cancel ahead of your renewal date if you do not want another billing cycle.",
    supportScript: null
  },
  {
    id: "youtube-tv",
    name: "YouTube TV",
    category: "Live TV & Streaming",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.google.com/youtubetv/answer/7129668",
    darkPatterns: ["Pause Membership Alternative", "Recorded Library Expiry Window", "Add-On Network Separation"],
    summary: "Cancel or pause a YouTube TV membership from Settings > Membership on the web or mobile app, or check add-on networks separately.",
    steps: [
      "Open the **YouTube TV** app or website and sign in to the Google Account that holds the membership.",
      "Select your **profile photo**, go to **Settings > Membership**, and click **Manage**.",
      "Select **Cancel membership** (or choose **Pause** if offered) and confirm until your status updates."
    ],
    paymentTip: "Access usually continues through the end of your current billing period, and DVR recordings expire after cancellation ends if you do not resubscribe.",
    supportScript: null
  },
  {
    id: "microsoft-365",
    name: "Microsoft 365",
    category: "Office & Productivity Suites",
    region: "Global",
    difficulty: "Medium",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.microsoft.com/en-gb/accounts-billing/subscriptions/cancel-a-microsoft-365-subscription",
    darkPatterns: ["Recurring Billing Toggle vs. Cancel", "App Store / Play Store Billing Split", "Annual Commitment Refund Rules"],
    summary: "Cancel a Microsoft 365 subscription on your Microsoft account services page—or manage it through Apple/Google Play or the Microsoft 365 Admin Center depending on how you bought it.",
    steps: [
      "**Direct / Web:** Sign in to your Microsoft account at `account.microsoft.com/services/microsoft365` (or **Services & subscriptions**) using the account tied to the plan.",
      "Select **Manage** next to your Microsoft 365 subscription, choose **Cancel** (or **Turn off recurring billing**), and follow the on-screen steps until confirmed.",
      "**App Store / Google Play / Business:** Cancel inside your **Apple** or **Google Play** subscription settings if purchased there, or use the **Microsoft 365 Admin Center** for business plans."
    ],
    paymentTip: "Back up OneDrive files and check whether your plan is direct consumer, business/NCE, or app-store billed before cancelling, as refund eligibility and end-date behavior vary by billing channel.",
    supportScript: null
  },
  {
    id: "microsoft-visio",
    name: "Microsoft Visio",
    category: "Diagramming & Productivity Tools",
    region: "Global",
    difficulty: "Medium",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.microsoft.com/en-gb/accounts-billing/subscriptions/cancel-a-microsoft-365-subscription",
    darkPatterns: ["Recurring Billing Toggle vs. Cancel", "Admin vs. Individual Account Split"],
    summary: "Cancel an individual Microsoft Visio subscription under Services & subscriptions in your Microsoft account, or ask your admin if assigned via an organization.",
    steps: [
      "Sign in to your **Microsoft account** **Services & subscriptions** page using the account tied to your Visio plan.",
      "Locate **Visio** (Visio Plan 1 or Plan 2), select **Manage**, and choose **Cancel** or **Turn off recurring billing**.",
      "Follow the confirmation prompts through to completion and verify that recurring billing is turned off."
    ],
    paymentTip: "Export or download any Visio diagrams you need locally before your subscription ends, and check if your license is managed through a work or school admin.",
    supportScript: null
  },
  {
    id: "microsoft-project",
    name: "Microsoft Project",
    category: "Project Management & Productivity Tools",
    region: "Global",
    difficulty: "Medium",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.microsoft.com/en-gb/accounts-billing/subscriptions/cancel-a-microsoft-365-subscription",
    darkPatterns: ["Recurring Billing Toggle vs. Cancel", "Organization License Gatekeeping"],
    summary: "Cancel a self-managed Microsoft Project subscription under Services & subscriptions in your Microsoft account, or contact your organization's administrator for work plans.",
    steps: [
      "Sign in to your **Microsoft account** **Services & subscriptions** page using the account linked to your Project plan.",
      "Select **Manage** next to **Project**, click **Cancel** or **Turn off recurring billing**, and follow the prompts.",
      "Confirm cancellation and check your subscription status so no further charges are scheduled."
    ],
    paymentTip: "Back up project plans, schedules, and exported reports ahead of cancellation, and confirm whether your license is personal or organization-assigned.",
    supportScript: null
  },
  {
    id: "microsoft-defender",
    name: "Microsoft Defender",
    category: "Security & Device Protection",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.microsoft.com/en-gb/accounts-billing/subscriptions/cancel-your-microsoft-subscription",
    darkPatterns: ["Bundle Overlap with Microsoft 365", "App Store / Google Play Billing Split", "Recurring Billing Toggle vs. Cancel"],
    summary: "Cancel a paid Microsoft Defender plan (or the Microsoft 365 subscription providing Defender benefits) under Services & subscriptions in your Microsoft account.",
    steps: [
      "Sign in to your **Microsoft account** **Services & subscriptions** page (`account.microsoft.com/services`) using the account linked to your Defender plan.",
      "Locate your **Microsoft Defender** or **Microsoft 365** subscription, select **Manage**, and click **Cancel** or **Turn off recurring billing**.",
      "Follow the confirmation prompts through to completion—or cancel inside **Apple** / **Google Play** subscriptions if purchased through a mobile store."
    ],
    paymentTip: "If you see **Turn on recurring billing**, auto-renewal is already off and the plan will expire on the date shown. Built-in Windows security remains available after paid Defender benefits end.",
    supportScript: null
  },
  {
    id: "onedrive-standalone",
    name: "OneDrive (Standalone Storage)",
    category: "Cloud Storage & Sync Tools",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.microsoft.com/en-gb/accounts-billing/subscriptions/cancel-your-microsoft-subscription",
    darkPatterns: ["Storage Quota Lockout & Sync Blocks", "Unlinking vs. Cancelling Confusion", "Third-Party Store Billing Split"],
    summary: "Cancel a standalone OneDrive storage subscription from your Microsoft account Services & subscriptions page—or cancel through Apple/Google Play if billed there.",
    steps: [
      "Sign in to your **Microsoft account** **Services & subscriptions** page (`account.microsoft.com/services`) with the account used to buy the OneDrive plan.",
      "Select **Manage** next to your **OneDrive** subscription, choose **Cancel** (or **Turn off recurring billing**), and complete the confirmation steps.",
      "If purchased through **Apple App Store**, **Google Play**, or a third-party retailer, cancel in that store/account instead."
    ],
    paymentTip: "Download or move needed files before your paid storage ends: dropping back to the free storage allowance while over quota can block new OneDrive uploads/syncing and affect Outlook.com mail.",
    supportScript: null
  },
  {
    id: "copilot-pro",
    name: "Copilot Pro",
    category: "AI Assistants & Productivity",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.microsoft.com/en-gb/accounts-billing/subscriptions/cancel-your-microsoft-subscription",
    darkPatterns: ["14-Day Refund Window Limits", "Recurring Billing Toggle vs. Cancel", "Multi-Account Billing Split"],
    summary: "Cancel a Copilot Pro subscription from Services & subscriptions in your Microsoft account to stop future renewals.",
    steps: [
      "Sign in to your **Microsoft account** **Services & subscriptions** page (`account.microsoft.com/services`) using the account tied to Copilot Pro.",
      "Find **Copilot Pro**, select **Manage** (or check if **Turn on recurring billing** is already shown), and choose **Cancel**.",
      "Follow the on-screen cancellation steps through to confirmation and check your account status afterward."
    ],
    paymentTip: "In most regions outside specific countries eligible for prorated refunds at any time, prorated refund eligibility requires cancelling within 14 days of initial purchase—check the cancellation screen for exact terms.",
    supportScript: null
  },
  {
    id: "planet-fitness",
    name: "Planet Fitness Membership",
    category: "Fitness & Gym Memberships",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.planetfitness.com/about-planet-fitness/customer-service/",
    darkPatterns: ["In-Person / Certified Mail Friction", "$58 Early Buyout Fee", "Annual Fee Timing Trap", "7-Day Billing Cutoff"],
    summary: "Cancel a Planet Fitness membership in person at your home club, by certified mail, or via the web portal where supported—well ahead of monthly and annual billing dates.",
    steps: [
      "**In Person (Fastest):** Visit your **home club** front desk, ask to cancel your membership, and complete and sign the cancellation paperwork.",
      "**Web Portal (Where Available):** Sign in to your member portal on a desktop browser at `planetfitness.com` and check **Manage Membership** if online cancellation is enabled for your club and plan.",
      "**By Certified Mail:** Send a signed cancellation notice (including your name, address, membership ID, and home club details) to your home club—ideally via certified mail with tracking—and save proof of receipt."
    ],
    paymentTip: "Cancel at least 7 business days before your next billing date to avoid another charge, finish before the 25th of the prior month to dodge an upcoming annual fee, and check for a $58 buyout fee if ending a minimum-term contract early.",
    supportScript: null
  },
  {
    id: "audible-membership",
    name: "Audible Membership",
    category: "Audiobooks & Spoken Word",
    region: "Global",
    difficulty: "Medium",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.audible.com/help/article/cancel-membership",
    darkPatterns: ["Credit Forfeiture Trap", "Multi-Step Retention & Pause Lures", "App Store / Google Play Billing Split", "App Uninstall Misdirection"],
    summary: "Cancel an Audible membership via your Audible/Amazon account details page—or through Apple/Google Play if billed through a mobile app store—after spending unused credits.",
    steps: [
      "**Web (Audible / Amazon):** Sign in to your Audible or Amazon account, open your account/profile menu, go to **Membership details** (or **View membership details**), and select **Cancel membership**.",
      "**App Store / Google Play:** If billed via Apple or Google Play, cancel directly inside **Settings > [Your Name] > Subscriptions** on iOS or **Google Play > Payments & subscriptions > Subscriptions** on Android rather than the Audible website.",
      "**Push Past Retention Screens:** Decline pause, discount, or downgrade offers and follow through to **Continue to cancel** / **Confirm cancellation** until you receive a confirmation email."
    ],
    paymentTip: "Spend unused membership credits on audiobooks (including pre-orders) before cancelling—credits generally expire upon cancellation, whereas audiobooks bought with credits or cash remain in your library.",
    supportScript: null
  },
  {
    id: "dashpass",
    name: "DashPass",
    category: "Food Delivery & Convenience",
    region: "Global",
    difficulty: "Medium",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://help.doordash.com/en-us/consumers/article/how-do-i-cancel-my-dashpass-subscription",
    darkPatterns: ["24-Hour Renewal Cutoff", "Immediate Trial Benefit Loss", "Pause vs. Cancel Lure", "Support Chat / Phone Fallback"],
    summary: "Cancel DashPass in the DoorDash app or at doordash.com under Manage DashPass at least 24 hours before renewal, or contact 24/7 support if the cancel option does not appear.",
    steps: [
      "Open the **DoorDash** app or go to `doordash.com`, sign in to your account, and tap or click the **account icon**.",
      "Select **Manage DashPass**, then choose **Cancel Membership** (rather than **Pause Membership**).",
      "Pick a cancellation reason, select **Select reason**, click **Cancel DashPass** through to **Got it**, and save the confirmation email."
    ],
    paymentTip: "Cancel at least 24 hours before your next scheduled charge to avoid renewal; if you cancel during a free trial or promotional period, benefits end immediately.",
    supportScript: null
  },
  {
    id: "doordash-pass",
    name: "DoorDash Pass",
    category: "Food Delivery & Convenience",
    region: "Global",
    difficulty: "Medium",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://help.doordash.com/en-us/consumers/category/dashpass",
    darkPatterns: ["Partner / Student / Employer Plan Tie-In", "Pause vs. Cancel Confusion", "Account & Billing Channel Split"],
    summary: "Manage or cancel a DoorDash Pass membership via Manage DashPass in your DoorDash account, or check partner/employer/app-store billing if enrolled through an external benefit or store.",
    steps: [
      "Sign in to the **DoorDash** app or `doordash.com`, open the **account icon**, and go to **Manage DashPass**.",
      "Choose **Cancel Membership** (or **Pause Membership** only if you want a temporary pause), pick a reason, and confirm until you see **Got it**.",
      "If your pass was enrolled through a partner offer, student/employee benefit, or external billing channel, check that partner account or reach out to DoorDash 24/7 support (`855-431-0459` or in-app chat)."
    ],
    paymentTip: "Check whether your pass is a direct recurring consumer plan or tied to a partner/employer program so you do not get billed on a secondary account or miss a 24-hour renewal cutoff.",
    supportScript: null
  },
  {
    id: "eos-fitness",
    name: "EōS Fitness Membership",
    category: "Fitness & Gym Memberships",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.eosfitness.com/faq",
    darkPatterns: ["30-Day Final Billing Notice", "Personal Training Contract Lock", "Portal / Club / Phone Split", "Freeze vs. Cancel Lure"],
    summary: "Cancel an EōS Fitness membership with a 30-day notice via the MyiClubOnline member portal, by contacting support/home club, or in person—after resolving any active personal training agreement.",
    steps: [
      "**Online Portal:** Sign in or register on the **MyiClubOnline** portal (`myiclubonline.com`), go to **My Agreements**, select the membership agreement, and follow the cancellation steps.",
      "**Club, Phone, or Support:** If online cancellation is unavailable or restricted in your state/agreement, visit your **home EōS club**, call customer service (`1-866-992-8958`), or contact support via `eosfitness.com/contact-form`.",
      "**Clear Blockers First:** Ensure your account has no past-due balance and close or address any separate **Personal Training Agreement** before expecting membership cancellation to complete."
    ],
    paymentTip: "EōS requires a 30-day cancellation notice and bills one final cycle on your regular billing date covering that final 30-day window; save written proof of cancellation.",
    supportScript: null
  },
  {
    id: "espn",
    name: "ESPN Subscription",
    category: "Sports Streaming & Media",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.19pine.ai/cancel-subscription/espn-plus",
    darkPatterns: ["Disney / Hulu Bundle Routing", "App Store / Google Play Billing Split", "Retention Prompts"],
    summary: "Cancel a direct ESPN / ESPN+ subscription from your ESPN or MyDisney account page, or manage it through your Disney bundle or mobile app store if billed there.",
    steps: [
      "**Direct / Web:** Sign in at `espn.com`, open your **profile/account menu**, select **Account** (or **Manage Subscription** / **Manage with MyDisney**), and choose **Cancel** on your active ESPN plan.",
      "**Disney Bundle:** If billed as part of a **Disney+, Hulu, ESPN** bundle, sign in to your **Disney+** account page and cancel the bundle there.",
      "**App Store / Google Play:** If billed through Apple or Google Play, cancel inside **Settings > [Your Name] > Subscriptions** on iOS or **Google Play > Payments & subscriptions > Subscriptions** on Android."
    ],
    paymentTip: "Cancel through the exact merchant or platform named on your billing statement, and check whether your access comes from a standalone ESPN plan, a Disney bundle, or a third-party TV/streaming partner.",
    supportScript: null
  },
  {
    id: "fabletics",
    name: "Fabletics VIP Membership",
    category: "Apparel & Subscription Boxes",
    region: "Global",
    difficulty: "Medium",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://help.fabletics.com/hc/en-us/articles/360058964132-Is-Fabletics-easy-to-cancel",
    darkPatterns: ["Monthly Credit Auto-Billing", "Skip Window (1st–5th) vs. Full Cancel", "12-Month Credit Expiry", "Chat / Phone / Support Routing"],
    summary: "Cancel a Fabletics VIP membership at no cancellation fee via your account options, live chat, support contact channels, or customer service phone line.",
    steps: [
      "**Online Account:** Sign in to your Fabletics account (avoiding private/incognito mode if social login has trouble), open your **account/profile menu**, and select **Cancel** if available on your account view.",
      "**Chat, Support Form, or Phone:** If you need assisted cancellation, use **Live Chat** or the **Help & Contact** support options on `fabletics.com`, or call member support (`1-844-322-5384` in the US / `020 36953 831` in the UK).",
      "**Push Through Prompts & Save Proof:** Complete any exit prompts or surveys and save your cancellation confirmation email or reference."
    ],
    paymentTip: "VIP membership cancellation carries no fee; unused VIP credits stay on your account after cancelling but expire 12 months after issue, and skipping during the 1st–5th of the month only skips a single month's billing.",
    supportScript: null
  },
  {
    id: "fortnite-crew",
    name: "Fortnite Crew",
    category: "Gaming & Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.epicgames.com/help/c-34254770/c-Trending_0/how-can-i-cancel-my-fortnite-crew-subscription-a10258427",
    darkPatterns: ["Platform Store Billing Split", "Auto-Renew Toggle Naming", "No Mid-Cycle Refund Policy"],
    summary: "Cancel Fortnite Crew on the exact store or platform where you subscribed—Epic Games, Xbox, PlayStation, Nintendo Switch, or Apple App Store—to stop future renewals.",
    steps: [
      "**Epic (Web / Launcher / In-Game):** Sign in at `epicgames.com/account`, go to **Subscriptions**, click the **cog icon**, and select **Cancel Subscription** (or go to **Passes > Manage Subscription > Cancellation Info** in Fortnite).",
      "**Consoles (Xbox / PlayStation / Switch):** Turn off recurring billing or auto-renew under **Services & Subscriptions** (`account.microsoft.com/services` for Xbox), **Payment and Subscriptions / Subscriptions Management** (PlayStation), or **Your Subscriptions** in Nintendo eShop.",
      "**Mobile Store:** If billed via Apple, cancel under **Settings > [Your Name] > Subscriptions** on iOS or at `account.apple.com`."
    ],
    paymentTip: "Cancelling turns off future renewals only and does not refund the active billing period; if you see duplicate subscriptions across platforms, cancel the extra one so you are not billed twice.",
    supportScript: null
  },
  {
    id: "fubo",
    name: "Fubo Subscription",
    category: "Live TV & Sports Streaming",
    region: "Global",
    difficulty: "Medium",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.fubo.tv/hc/en-us/articles/360021527991-How-do-I-Cancel-My-Fubo-Subscription",
    darkPatterns: ["Discount Offer Interstitials", "Roku / Third-Party Billing Split", "Immediate Free Trial Cutoff"],
    summary: "Cancel a Fubo subscription under My Account > Subscription on fubo.tv—or through Roku/your third-party billing provider if billed outside Fubo.",
    steps: [
      "**Fubo Website:** Sign in at `fubo.tv`, choose a profile, open the **settings icon > My Account > Subscription**, select your plan, and click **Cancel** near the bottom.",
      "**Decline Retention Offers:** If Fubo displays a discounted retention screen, click **CANCEL SUBSCRIPTION** (not **REDEEM OFFER**) and dismiss the confirmation screen with **OK**.",
      "**Roku / External Billing:** If your subscription is a **Roku Subscription**, cancel at `my.roku.com` or highlight Fubo on Roku, press **Star**, and select **Manage subscription > Cancel subscription**."
    ],
    paymentTip: "Cancelling a free trial ends access immediately without another trial period, while cancelling a paid plan lets you keep watching until the end of your current billing period.",
    supportScript: null
  },
  {
    id: "hulu",
    name: "Hulu Subscription",
    category: "Streaming & Live TV",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://help.hulu.com/article/hulu-cancel-hulu-subscription",
    darkPatterns: ["12-Week Pause Offer Lure", "Third-Party / Bundle Billing Split", "Immediate Live TV Trial Cutoff"],
    summary: "Cancel a Hulu-billed subscription on your Account page—or cancel through your third-party billing provider (such as Apple, Google Play, Amazon, or a bundle partner) if billed externally.",
    steps: [
      "**Direct / Web:** Sign in to your Hulu **Account** page on a computer or mobile browser, select **Cancel** under **Your Subscription**, choose **Continue to Cancel** if offered a pause, and click **Cancel Subscription**.",
      "**Mobile App Store:** If billed through Apple or Google Play, cancel in **Settings > [Your Name] > Subscriptions** on iOS or **Google Play > Payments & subscriptions > Subscriptions** on Android.",
      "**Third-Party / Bundle Billing:** Check **Payment Information** on your Hulu Account page to see your billing party; if billed by a partner or bundle provider (such as Amazon or HBO Max), manage and cancel it through that billing party."
    ],
    paymentTip: "Hulu-billed plans may prompt you to pause for up to 12 weeks instead of cancelling, and Hulu + Live TV free trials end immediately upon cancellation.",
    supportScript: null
  },
  {
    id: "hbo-max",
    name: "HBO Max Subscription",
    category: "Streaming & Entertainment",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://help.hbomax.com/ge-en/answer/detail/000002526",
    darkPatterns: ["Third-Party & TV Provider Billing Split", "Separate Add-On Billing", "App Uninstall Misdirection"],
    summary: "Check who bills your HBO Max subscription at HBOMax.com/subscription or in the app, then cancel there or through the third-party platform or provider that bills you.",
    steps: [
      "**Find Your Billing Party:** Go to `HBOMax.com/subscription` (or open **Subscription** under your profile/settings in the app) to see who bills your base subscription and any add-ons.",
      "**Direct / Web:** If billed directly by HBO Max, select **Cancel Your Subscription** at `HBOMax.com/subscription`, confirm cancellation, and note your expiration date.",
      "**Third-Party / Store / Provider:** If billed through Apple, Google Play, Roku, Amazon, Samsung TV, or an internet/mobile/TV provider, cancel inside that billing provider's subscriptions or account settings."
    ],
    paymentTip: "Deleting the HBO Max app does not cancel your subscription, and if you also have add-ons (such as TNT Sports in supported regions), verify whether add-ons are billed separately.",
    supportScript: null
  },
  {
    id: "kindle-unlimited",
    name: "Kindle Unlimited",
    category: "E-Books & Reading Subscriptions",
    region: "Global",
    difficulty: "Medium",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.amazon.com/gp/help/customer/display.html?nodeId=GLSQ4722655M4ZEJ",
    darkPatterns: ["Borrowed Book Removal", "Mobile Store / App Routing Split", "Multi-Step Retention Confirmation"],
    summary: "Cancel a Kindle Unlimited subscription through Amazon's Memberships & Subscriptions or Kindle Unlimited settings on a web browser, or manage it in Apple subscriptions if billed via iOS.",
    steps: [
      "**Web Browser (Amazon Account):** Sign in to your Amazon account on a desktop or mobile browser, open **Accounts & Lists > Memberships & Subscriptions** (or **Kindle Unlimited**), select **Cancel Kindle Unlimited Membership**, and confirm cancellation.",
      "**Mobile Store Check:** If you subscribed through an Apple device and do not see the option under your Amazon account, cancel inside **Settings > [Your Name] > Subscriptions** on iOS.",
      "**Verify Account & Receipt:** Confirm you are signed into the exact regional Amazon account and storefront where the plan was billed, and save your cancellation confirmation."
    ],
    paymentTip: "Your subscription remains active until the end of your current billing period with no partial refund for unused days or prepaid/gift months; borrowed titles leave your library after the billing date passes, while purchased books stay.",
    supportScript: null
  },
  {
    id: "la-fitness",
    name: "LA Fitness Membership",
    category: "Fitness & Gym Memberships",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "4–6 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.lafitness.com/Pages/CancelConf.aspx",
    darkPatterns: ["In-Person / Certified Mail Friction", "Region-Locked Online Cancel", "Separate Personal Training Lock", "Freeze Fee Lure"],
    summary: "Cancel an LA Fitness membership in person at a club, by certified mail to Irvine, CA, or via your online account where available—at least 5 business days before your next billing date.",
    steps: [
      "**In Person:** Visit a local LA Fitness club during staffed hours, ask the front desk or operations manager to process a membership cancellation, sign the form, and keep a copy for your records.",
      "**By Certified Mail:** Download or print a cancellation notice/form, include your full name, membership or key-tag number, contact details, and signature, mail it via **certified mail** to `LA Fitness, P.O. Box 54170, Irvine, CA 92619-4170`, and keep your tracking receipt.",
      "**Online Account (Where Available):** Sign in to your **My LA Fitness** account on a web browser, check **Account Summary** or **Account Information** for a cancellation option or form, and verify your confirmation email."
    ],
    paymentTip: "Submit your cancellation request at least 5 business days before your next billing date to help avoid another charge, save written or certified-mail proof, and cancel separate personal training agreements separately.",
    supportScript: null
  },
  {
    id: "paramount-plus",
    name: "Paramount+ Subscription",
    category: "Streaming & Entertainment",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.paramountplus.com/s/article/PI-How-do-I-cancel-my-subscription",
    darkPatterns: ["Third-Party & Channel Billing Split", "No Pause Option (Must Cancel/Rejoin)", "Annual / Multi-Month No Partial Refund"],
    summary: "Cancel a direct Paramount+ subscription at paramountplus.com/account, or cancel through Apple, Google Play, Amazon, or Roku if billed through a third party.",
    steps: [
      "**Direct / Web:** Sign in at `paramountplus.com`, open your **Account** page (`paramountplus.com/account`), click **Cancel Subscription**, and follow the prompts to confirm.",
      "**Mobile App Stores:** If billed through Apple, go to **Settings > [Your Name] > Subscriptions > Paramount+ > Cancel Subscription**; if billed via Google Play, open **Google Play > Payments & Subscriptions > Subscriptions** or `payments.google.com`.",
      "**Amazon / Roku:** If billed through Amazon, go to `amazon.com/appstoresubscriptions`, choose **Actions > Turn Off Auto-Renewal** next to Paramount+; on Roku, highlight the channel, press `*`, and select **Manage Subscription > Cancel Subscription**."
    ],
    paymentTip: "Paramount+ does not currently offer a pause option—cancel and resubscribe later if you want a break; access continues through the end of your current billing or trial period with no partial refunds for annual plans.",
    supportScript: null
  },
  {
    id: "peacock",
    name: "Peacock Subscription",
    category: "Streaming & Entertainment",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.peacocktv.com/help/article/cancellation",
    darkPatterns: ["Retention Offer Screen (Claim Offer vs. Cancel)", "Base + Add-On Auto-Cancel Bundle", "Third-Party Billing Routing"],
    summary: "Cancel a Peacock-billed plan on your Account page under Cancel All Subscriptions—declining any retention offer—or cancel through your third-party billing provider if billed externally.",
    steps: [
      "**Direct / Web:** Sign in at `peacocktv.com`, open **ACCOUNT** (or go to `peacocktv.com/account/plans`), and select **Cancel All Subscriptions** under **QUICK LINKS**.",
      "**Decline Retention Offer:** When Peacock shows an offer to stay or switch plans, select **CANCEL SUBSCRIPTIONS** rather than **CLAIM OFFER** to complete cancellation.",
      "**Third-Party / Add-Ons:** If billed through Apple, Amazon, Roku, Xumo TV, or another provider, cancel with that billing partner; to drop only an add-on without ending your base plan, choose **Remove Add-On** on the **Subscriptions** tab."
    ],
    paymentTip: "Check the **Payment Method** section under **Subscriptions** on your Peacock Account page to verify who bills you; cancelling a Peacock-billed base plan also sets add-ons to cancel while letting you watch through the current period.",
    supportScript: null
  },
  {
    id: "spectrum-internet",
    name: "Spectrum Internet",
    category: "Internet & Telecom Providers",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "5–10 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.spectrum.net/support/account-and-billing/change-or-cancel-service",
    darkPatterns: ["Retention / Save-Desk Pitching", "Unreturned Equipment Fees", "Non-Prorated Billing Cycle", "Bundle & Mobile Discount Shifts"],
    summary: "Cancel Spectrum Internet by calling support, visiting a Spectrum Store, or signing in at spectrum.net to view cancellation options—then return leased equipment and save your disconnect and return receipts.",
    steps: [
      "**Phone or Store (Most Direct):** Call Spectrum support (`833-267-6094` or `833-949-0036`) as the primary account holder or visit a **Spectrum Store** with your account details, clearly request internet disconnection, decline retention/promo offers unless you want to stay, and record your disconnect date and order/confirmation number.",
      "**Online Account Check:** Sign in to your primary account at `spectrum.net` and check your account cancellation options or online chat support, noting that chat or web flows may route you to an agent or store to finalize disconnection.",
      "**Return Leased Equipment & Keep Receipts:** Return any leased Spectrum modem, router, or Wi-Fi equipment (including power supplies, unless exempt such as fiber SONU/UPS hardware) at a **Spectrum Store** or **The UPS Store** for Spectrum return, and keep your receipt until your final bill shows all devices cleared."
    ],
    paymentTip: "Spectrum generally bills for the full billing period rather than prorating mid-cycle cancellations, charges unreturned equipment fees for missing leased hardware, and may change bundle or Spectrum Mobile pricing once internet is disconnected.",
    supportScript: null
  },
  {
    id: "tinder",
    name: "Tinder Subscription",
    category: "Dating & Social Apps",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.help.tinder.com/hc/en-us/articles/115003554466-Cancel-your-subscription",
    darkPatterns: ["Platform Store Billing Split", "Account Deletion vs. Billing Stop", "Non-Transferable Device Billing"],
    summary: "Cancel a Tinder subscription on the exact platform or store where you subscribed—Tinder.com, Apple App Store, or Google Play—before your renewal date.",
    steps: [
      "**Tinder.com / Direct Card:** Sign in at `tinder.com`, tap your **profile icon**, choose **Manage Payment Account**, locate your subscription, and tap **Cancel Subscription**.",
      "**iOS (Apple ID):** Open **Settings > [Your Name] > Subscriptions**, select your Tinder subscription, and tap **Cancel Subscription**.",
      "**Android (Google Play):** Open the **Google Play** app, tap your **profile icon > Payments & Subscriptions > Subscriptions**, select Tinder, and tap **Cancel subscription** (or use **Manage Payment Account** in the Tinder app if billed directly)."
    ],
    paymentTip: "Deleting the Tinder app or your Tinder profile does not automatically cancel recurring billing, and subscriptions do not transfer across devices or platforms—cancel on the specific platform where you purchased.",
    supportScript: null
  },
  {
    id: "thrive-market",
    name: "Thrive Market Membership",
    category: "Grocery & Subscription Boxes",
    region: "Global",
    difficulty: "Medium",
    estimatedTime: "3–6 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://help.thrivemarket.com/hc/en-us/articles/360001342843-How-do-I-cancel-my-membership",
    darkPatterns: ["Retention / Save Flow Prompts", "Live Chat / Phone Cancellation Routing", "Annual / Monthly Renewal Billing"],
    summary: "Cancel a Thrive Market membership through live chat or member support on Thrive Market's help center or by phone, declining retention offers until cancellation is confirmed.",
    steps: [
      "**Live Chat or Help Center:** Sign in to your Thrive Market account and open **24/7 Live Chat** or membership support via `help.thrivemarket.com` to request cancellation.",
      "**By Phone:** Call Thrive Market member support at `(866) 419-2174` with your account details ready, clearly ask to cancel your membership, and decline retention or discount offers until cancellation is processed.",
      "**Save Confirmation Proof:** Confirm that auto-renewal is turned off and save your cancellation confirmation email or reference ID."
    ],
    paymentTip: "Watch billing descriptors such as `THRIVE MARKET` or `THRIVEMARKETYEARLYFEE` on your statement, and verify whether you are on an annual or monthly cycle so you cancel before the next renewal date.",
    supportScript: null
  },
  {
    id: "uber-one",
    name: "Uber One Membership",
    category: "Ride-Hailing & Food Delivery",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://help.uber.com/en/ubereats/restaurants/article/how-do-i-cancel-my-uber-one-membership?nodeId=b386f2df-2321-484f-99ee-95fda95b57a3",
    darkPatterns: ["24-to-48 Hour Renewal Cutoff", "Pause Membership Lure", "Immediate Free Trial Cutoff", "3-Day Re-Subscribe Lock on Refunds"],
    summary: "Cancel an Uber One membership under Account > Uber One > Manage Membership in the Uber or Uber Eats app (or via web/support)—ideally at least 24–48 hours before your renewal date.",
    steps: [
      "**Uber / Uber Eats App:** Open the **Uber** or **Uber Eats** app, tap the **Account / profile icon**, select **Uber One**, scroll down to **Manage Membership**, and tap **End Membership** (confirming again with **End Membership** or **Leave Uber One**).",
      "**Web Browser or Support:** On a web browser, open the menu and select **Uber One > Manage Membership** to manage or end your plan; if you are inside a pre-renewal cutoff window (24 to 48 hours depending on region/plan) and the cancel option is locked or a charge appears, reach out through **Help** in the app.",
      "**Ignore Pause Prompts & Save Proof:** If offered a temporary pause instead of cancellation, select **End Membership** to stop recurring billing completely and save your confirmation details."
    ],
    paymentTip: "Cancelling during a free trial can end benefits immediately, while cancelling a paid plan generally keeps benefits until the end of the billing cycle; if an eligible refund is issued via support, you may be blocked from repurchasing Uber One for 3 days.",
    supportScript: null
  },
  {
    id: "walmart-plus",
    name: "Walmart+ Membership",
    category: "Retail & Delivery Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.walmart.com/help/article/manage-walmart-membership/126c9a990a944c3abd8531de52a87440",
    darkPatterns: ["Pause Membership & Remind-Me Prompts", "Plus Up & Linked Plan Billing Rules", "Phone / Partner Billing Routing"],
    summary: "Cancel a Walmart+ membership in your Walmart account under Account > Walmart+ > Manage membership > Manage > Cancel, or by calling Walmart Customer Care.",
    steps: [
      "**Web or Walmart App:** Sign in to your Walmart account, open **Account > Walmart+ > Manage membership**, select **Manage** next to your Walmart+ plan, and choose **Cancel** beside **Cancel membership** (confirming through any retention/pause prompts).",
      "**By Phone or Partner Check:** If you prefer phone support or your membership is tied to a partner/sponsor or linked account, call Walmart Customer Care at `(800) 924-9206` or check your partner/linked billing terms.",
      "**Verify Cancellation & Save Proof:** Confirm that auto-renewal is off and keep your confirmation details; benefits generally continue through the end of your current term."
    ],
    paymentTip: "If prompted with Pause Membership or Remind Me Later options, pick **Cancel membership** to stop future renewals completely, and note how Plus Up benefits (such as InHome or streaming upgrades) or linked plans behave at cancellation.",
    supportScript: null
  },
  {
    id: "xfinity-internet",
    name: "Xfinity Internet",
    category: "Internet & Telecom Providers",
    region: "Global",
    difficulty: "Hard",
    estimatedTime: "5–10 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.xfinity.com/cancel",
    darkPatterns: ["Retention & Save-Desk Pitching", "Unreturned Equipment Fees", "NOW vs. Standard Plan Routing Split", "Bundle & Mobile Discount Shifts"],
    summary: "Cancel standard Xfinity Internet by calling 1-800-934-6489, scheduling a callback, visiting an Xfinity Store, or using Xfinity Assistant—or manage NOW Internet online via the NOW Portal—then return leased gear and save receipts.",
    steps: [
      "**Phone, Callback, or Store (Standard Service):** Call Xfinity at `1-800-934-6489`, schedule a call, or visit an **Xfinity Store** as the primary account holder, state clearly that you want to disconnect internet service, decline retention or pause offers unless desired, and record your disconnect date and confirmation number.",
      "**Xfinity Assistant or NOW Portal:** Open **Xfinity Assistant** on `xfinity.com/chat/` or in the Xfinity app to request cancellation or agent routing; if you have **Xfinity NOW Internet**, sign in to the **NOW Portal** (`xfinity.com/now`) to pause, cancel, or turn off autopay.",
      "**Return Leased Equipment & Keep Receipts:** Drop off any leased Xfinity gateway, modem, or TV/streaming box at an **Xfinity Store** or authorized return drop-off, keep your itemized return receipt until cleared on your statement, and port any mobile number before cancelling Xfinity Mobile."
    ],
    paymentTip: "Returning leased equipment promptly and keeping proof of drop-off helps avoid unreturned equipment charges, while disconnecting internet can change bundle discounts or Xfinity Mobile pricing and may apply contract or billing rules depending on your plan.",
    supportScript: null
  },
  {
    id: "ymca",
    name: "YMCA Membership",
    category: "Fitness & Gym Memberships",
    region: "Global",
    difficulty: "Medium",
    estimatedTime: "3–6 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.ymca.org",
    darkPatterns: ["Branch-Specific Notice Cutoffs", "In-Person / Form Submission Friction", "Hold / Freeze vs. Cancel Confusion", "Separate Program & Childcare Rules"],
    summary: "Cancel a YMCA membership through your local branch—in person, by phone/written form, or via your member portal where supported—well ahead of your branch's advance notice cutoff before your next draft.",
    steps: [
      "**Check Branch Rules & Submit Request:** Contact your local YMCA branch or member portal to follow that association's exact process—many branches require in-person visits, phone/written requests, or a signed cancellation form rather than a single global web button.",
      "**Beat the Advance Notice Cutoff:** Submit your cancellation request before your branch's notice deadline (often 10 to 30 days or before a mid-month/month-end cutoff prior to your next draft) so one more billing cycle is not drafted.",
      "**Get Written Confirmation & Check Drafts:** Save your email or written confirmation receipt, verify that any hold/freeze option was not selected instead of cancellation, and confirm your bank or card draft stops after your final paid period."
    ],
    paymentTip: "Because YMCA associations operate locally with varying notice cutoffs and policies, confirm your branch's exact cutoff date, ensure memberships are cancelled rather than placed on a paid hold, and handle separate childcare, camp, or class registrations separately.",
    supportScript: null
  },
  {
    id: "gpay-autopay",
    name: "Google Pay UPI Autopay",
    category: "Payment Wallets & Recurring Mandates",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–3 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.google.com/pay/india/answer/10840624?hl=en",
    darkPatterns: ["Pause vs. Cancel Option", "Mandate vs. Merchant Subscription Split", "Active Bank Account Requirement"],
    summary: "Cancel or pause a UPI Autopay mandate in the Google Pay app under your Profile picture > Autopay > Live tab, and confirm with your UPI PIN.",
    steps: [
      "**Open Autopay Mandates:** Open the **Google Pay** app, tap your **Profile picture** at the top right, and select **Autopay**.",
      "**Select Live Mandate & Cancel:** Open the **Live** tab, tap the active mandate you want to stop, and select **Cancel autopay** (or **Pause autopay** with start/end dates if you only want a temporary pause).",
      "**Authorize with UPI PIN & Verify:** Enter your **UPI PIN** to confirm the cancellation, then check the mandate list to verify it is no longer active."
    ],
    paymentTip: "Revoking a UPI Autopay mandate blocks future automatic debits through that mandate, but does not refund past charges or cancel your subscription directly inside the merchant's own account settings—and the linked bank account must be active to cancel.",
    supportScript: null
  },
  {
    id: "story-tv",
    name: "Story TV Subscription",
    category: "Streaming & Short-Form Video",
    region: "Global",
    difficulty: "Medium",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://storytv.asia/refund",
    darkPatterns: ["Separate Auto-Pay Mandate Requirement", "No Partial / Pro-Rata Refunds", "App Store / Payment Rail Split"],
    summary: "Cancel auto-renewal inside the Story TV app or account settings, and also revoke any recurring payment or auto-pay mandate in your payment app or bank before your next billing cycle.",
    steps: [
      "**Cancel in Story TV App or Account:** Open the **Story TV** app or website, sign in to your account, go to **Profile / Account > Subscription / Billing**, and turn off auto-renewal or cancel your subscription.",
      "**Revoke Payment Auto-Pay Mandate:** Because Story TV notes that users must also cancel recurring payments or auto-pay mandates on their chosen payment method, open your UPI/payment app or bank mandate section and cancel the active Story TV mandate.",
      "**Contact Support if Needed & Save Proof:** If you billed through an app store or cannot locate the cancel control, cancel via that store or email `support@storytv.asia` with your transaction details, and save your confirmation."
    ],
    paymentTip: "Story TV states that trial, monthly, quarterly, and annual purchases are generally final and non-refundable with no partial or pro-rata refunds, so cancel both the subscription and payment mandate before renewal.",
    supportScript: null
  },
  {
    id: "kukufm",
    name: "Kuku FM Subscription",
    category: "Audio & Storytelling Subscriptions",
    region: "Global",
    difficulty: "Medium",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://kukufm.com/support/premium-subscription",
    darkPatterns: ["Dual App + UPI/Bank Mandate Cancellation", "Immediate Trial Access Cutoff", "Strict No-Refund Policy", "Failed-Charge Tier Downgrade Retries"],
    summary: "Cancel a Kuku FM subscription under Profile > Settings > Subscription > Cancel trial/Subscription in the app, and also revoke any UPI AutoPay or bank/card recurring mandate in your payment method.",
    steps: [
      "**Cancel Inside Kuku FM App:** Open the **Kuku FM** app, tap **Profile > Settings > Subscription**, and select **Cancel trial/Subscription** (or **Cancel Subscription**), following the prompts to confirm.",
      "**Revoke UPI AutoPay or Bank Mandate:** If you paid via UPI AutoPay (such as Google Pay, PhonePe, Paytm, BHIM, or Amazon Pay) or a bank e-mandate/card, open that payment or banking app and cancel the active **Kuku FM** mandate directly.",
      "**Check App Store & Support:** If billed through Google Play or Apple Subscriptions, cancel there as well; if stuck, use in-app live chat or email `support@kukufm.com` and save confirmation proof."
    ],
    paymentTip: "Cancelling during a free trial can end access immediately rather than running out the trial window, Kuku FM enforces a strict no-refund policy on purchased plans, and uncancelled mandates can face recurring or lower-tier retry attempts after failed charges.",
    supportScript: null
  },
  {
    id: "instagram-subscription",
    name: "Instagram Subscription",
    category: "Social Media & Creator Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.meta.com/help/subscriptions/2534285893740819/",
    darkPatterns: ["Store vs. In-App Billing Split", "App Deletion / Unfollowing Trap", "Pre-Renewal Cutoff Window", "No Partial / Current-Period Refunds"],
    summary: "Cancel an Instagram creator subscription from the creator's profile under Subscribed > Manage > Cancel subscription—or cancel through Google Play, the Apple App Store, or Meta Accounts Center depending on how you were billed.",
    steps: [
      "**Cancel on Creator Profile or Instagram Settings:** Open the **Instagram** app, go to the creator's profile, tap **Subscribed > Manage > Cancel subscription**, and confirm (or check **Settings and activity / Accounts Center** for Meta/Instagram subscriptions).",
      "**Cancel Through App Store or Accounts Center:** If billed through **Google Play**, **Apple App Store**, or **Meta Accounts Center** (including Meta Verified or plan upgrades), open the exact store or Accounts Center profile you used to purchase and cancel the active subscription there.",
      "**Cancel Before Renewal & Save Proof:** Cancel before your next billing date (at least 24 hours ahead is recommended to avoid an in-flight renewal) and keep your cancellation confirmation; deleting the app, signing out, or unfollowing a creator does not stop billing."
    ],
    paymentTip: "Subscriptions are tied to the platform, device/store account, and profile used to subscribe—cancelling generally stops future renewals while keeping benefits through the end of the billing period, with no partial or pro-rata refunds for the current cycle.",
    supportScript: null
  },
  {
    id: "perplexity-pro",
    name: "Perplexity Subscription",
    category: "AI Tools & Research Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.perplexity.ai/help-center/en/articles/10354283-canceling-a-subscription",
    darkPatterns: ["Store vs. Web Billing Split", "Account Deletion Does Not Cancel Trap", "App Deletion Trap", "Paused Promotional Subscription Confusion"],
    summary: "Cancel a Perplexity subscription on the platform where you bought it—via Settings > Subscription > Manage Subscription on the web, or inside Apple App Store, Google Play, or Samsung Galaxy Store if billed through a store.",
    steps: [
      "**Cancel on Web (Direct Billing):** Sign in to your Perplexity account in a browser, open **Settings**, scroll to **Subscription**, click **Manage Subscription**, and select **Cancel subscription**.",
      "**Cancel via App Store, Google Play, or Galaxy Store:** If billed through a mobile/device store, open **Apple App Store > Profile > Subscriptions**, **Google Play > Profile > Payments & subscriptions > Subscriptions**, or **Samsung Galaxy Store > Menu > Subscriptions**, select **Perplexity**, and cancel there instead.",
      "**Verify Before Deleting Account or App:** Confirm your cancellation status and save proof; deleting the app or deleting your account does not cancel an active subscription."
    ],
    paymentTip: "Deleting your account does not automatically cancel recurring billing, and promotional or carrier-linked plans may show a paused status or separate billing rules—always cancel on the exact store or web account that billed you.",
    supportScript: null
  },
  {
    id: "gemini-subscription",
    name: "Gemini Subscription (Google AI / Google One)",
    category: "AI Tools & Research Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.google.com/googleone/answer/9056360",
    darkPatterns: ["Google One / App Store Billing Split", "Cloud Storage Quota Impact on Drive, Gmail & Photos", "Family Plan & Workspace Admin Routing"],
    summary: "Cancel a personal Gemini paid plan through Google One (via Gemini Settings or one.google.com) or via the Apple App Store if billed through Apple—and check your Google Drive/Gmail/Photos storage usage before your billing cycle ends.",
    steps: [
      "**Cancel via Gemini or Google One (Web / Android):** Open **gemini.google.com** (or the Gemini/Google One app), go to **Settings / Manage subscriptions** to open **Google One**, and select **Cancel membership** (confirming on the follow-up prompt).",
      "**Cancel via Apple App Store (iOS):** If subscribed through Apple on iPhone or iPad, open **iPhone Settings > [Your Name] > Subscriptions**, tap **Google One** (or the billed subscription), and tap **Cancel Subscription**.",
      "**Watch Storage & Plan Scope:** Check your cloud storage usage so you do not hit Gmail, Drive, or Photos limits when extra storage ends after the cycle, and note that Workspace/add-on plans are managed by an admin or reseller."
    ],
    paymentTip: "Cancelling a Google One AI membership stops future renewals while keeping access through the end of the current billing cycle (except certain carrier-sponsored plans), and may remove shared family storage or extra Google One perks once the cycle ends.",
    supportScript: null
  },
  {
    id: "claude-subscription",
    name: "Claude Subscription (Pro / Max / Team)",
    category: "AI Tools & Research Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.theoxfordaischool.com/blog/how-to-cancel-claude-subscription",
    darkPatterns: ["Anthropic vs. Apple / Google Play Billing Split", "24-Hour Pre-Renewal Cutoff", "Account / App Deletion Does Not Cancel Trap", "Personal vs. Team / API Console Split"],
    summary: "Cancel a Claude subscription on the platform that bills you—under Settings > Billing > Cancel on web/desktop, or inside Billing / Apple Subscriptions / Google Play Subscriptions on mobile—at least 24 hours before renewal.",
    steps: [
      "**Cancel on Web or Claude Desktop:** Sign in to the charged account at **claude.ai** or in the **Claude desktop app**, click your initials or name, open **Settings > Billing**, and choose **Cancel** and confirm.",
      "**Cancel on iOS or Android:** In the Claude mobile app tap your initials **> Billing > Manage subscription**, or cancel directly in **iOS Settings > [Name] > Subscriptions** or **Google Play > Payments & subscriptions > Subscriptions**.",
      "**Cancel at Least 24 Hours Early & Save Proof:** Complete cancellation at least **24 hours** before your renewal date, save your confirmation email/screen, and do not rely on deleting the app or account to stop billing."
    ],
    paymentTip: "Check your receipt email to confirm whether Anthropic, Apple, or Google Play bills you—and verify whether you are paying for a personal Pro/Max plan, a Team seat (cancelled by an Owner in Organization settings), or separate API Console usage.",
    supportScript: null
  },
  {
    id: "bgmi-prime-subscription",
    name: "BGMI Subscription (Prime / Prime Plus)",
    category: "Gaming & In-App Subscriptions",
    region: "India",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.google.com/googleplay/answer/7018481",
    darkPatterns: ["Store vs. In-Game Billing Split", "Uninstalling Game Does Not Cancel Trap", "Multiple Google Accounts / Billing Profiles", "No Refund for Active Cycle"],
    summary: "Cancel a BGMI Prime or Prime Plus subscription through Google Play (Payments & subscriptions > Subscriptions) or Apple App Store (Settings > [Name] > Subscriptions), and also check any linked UPI mandate if billed via UPI.",
    steps: [
      "**Cancel in Google Play (Android):** Open the **Google Play** store on the Google account used to purchase, tap your **Profile icon > Payments & subscriptions > Subscriptions**, select **BGMI** (or the Prime/Prime Plus subscription), and tap **Cancel subscription** following the prompts.",
      "**Cancel in Apple App Store (iOS):** Open **iPhone Settings**, tap **your Apple ID / name** at the top, select **Subscriptions**, find **Battlegrounds Mobile India (BGMI)** Prime/Prime Plus, and tap **Cancel Subscription**.",
      "**Check Linked UPI Mandate & Save Proof:** If you paid via a UPI app or mandate, verify no recurring mandate remains active in your payment app; do not rely on uninstalling BGMI to stop billing, and save your cancellation confirmation."
    ],
    paymentTip: "Uninstalling BGMI does not cancel an active Prime or Prime Plus subscription, and if you do not see the subscription in Google Play, make sure you switched to the exact Google account that made the purchase—current active billing cycles generally do not issue automatic refunds upon cancellation.",
    supportScript: null
  },
  {
    id: "bandlab-membership",
    name: "BandLab Membership",
    category: "Audio & Music Creation Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://help.bandlab.com/hc/en-us/articles/61321024101017-Manage-your-Subscription",
    darkPatterns: ["Web (Paddle) vs. App Store / Google Play Split", "24-Hour Pre-Renewal Cutoff", "Account Deletion Does Not Cancel Trap", "Survey Redirect to Store"],
    summary: "Cancel a BandLab Membership in Membership Settings > Change Plan > Cancel Subscription on the web, or through Apple App Store / Google Play if subscribed on mobile—ideally at least 24 hours before renewal.",
    steps: [
      "**Cancel on BandLab Web (Direct / Paddle):** Sign in to **BandLab** on the web, open **Membership Settings**, click **Change Plan**, and select **Cancel Subscription**.",
      "**Cancel on Mobile / App Store / Google Play:** In the BandLab app, go to **Membership Settings > Manage Subscription > Change Plan > Cancel Subscription** (which may prompt a survey and redirect you to your store's subscriptions page), or cancel directly inside **Apple App Store** or **Google Play** subscriptions.",
      "**Cancel at Least 24 Hours Early & Save Proof:** Cancel at least **24 hours** before your next renewal date to avoid an unwanted charge, save confirmation, and note that deleting your account does not cancel an active membership."
    ],
    paymentTip: "BandLab generally does not refund a renewal you forgot after the cycle bills, and cancelling keeps your membership perks until the end of the current billing period—so export any stems or projects you want locally before perks expire.",
    supportScript: null
  },
  {
    id: "elevenlabs-subscription",
    name: "ElevenLabs Subscription",
    category: "AI Voice & Audio Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://elevenlabs.io/docs/help-center/account/cancellation-refunds/how-do-i-cancel-my-subscription",
    darkPatterns: ["Unused Credits Expire on Cycle End", "Browser Popup / Ad-Blocker Interference", "Account Menu vs. Billing Path"],
    summary: "Cancel an ElevenLabs subscription on elevenlabs.io by opening your Profile icon > Subscription > Billing > Cancel Plan > Proceed > Cancel Subscription.",
    steps: [
      "**Open Subscription & Billing:** Sign in to your account at **elevenlabs.io**, click your **profile icon** in the top-right corner, and select **Subscription**, then click **Billing**.",
      "**Cancel Plan & Confirm:** In the **Modify Plan** section, click **Cancel Plan**, select **Proceed**, and choose **Cancel Subscription** on the confirmation step.",
      "**Verify Scheduled Cancellation & Browser:** Confirm that the page shows cancellation scheduled for the end of your current billing cycle; if a button or modal fails to respond, disable popup/script blockers or try Chrome, Edge, or Firefox, or email `support@elevenlabs.io` from your account email."
    ],
    paymentTip: "Cancellation takes effect at the end of your current billing cycle and moves your account to the free plan, at which point any unused subscription credits on your account expire.",
    supportScript: null
  },
  {
    id: "character-ai-plus",
    name: "Character.AI Subscription (c.ai+)",
    category: "AI Tools & Chat Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.character.ai/hc/en-us/articles/17399592326555-How-do-I-manage-or-cancel-my-c-ai-subscription",
    darkPatterns: ["Web Customer Portal vs. App Store Split", "Email Login Link Inbox / Spam Step", "Wrong Account Email Mismatch"],
    summary: "Cancel a Character.AI (c.ai+) web subscription via Settings > Account > Manage and the emailed Customer Portal link, or via Apple Subscriptions / Google Play Subscriptions if billed in a mobile app.",
    steps: [
      "**Cancel Web Subscription via Customer Portal:** On the **Character.AI** website, go to **Settings > Account > Manage**, enter the email address tied to your subscription, and open the Customer Portal link sent to your inbox or spam folder to cancel.",
      "**Cancel Mobile App Subscription via Store:** If you subscribed inside the mobile app, open **Apple App Store / iOS Subscriptions** or **Google Play > Payments & subscriptions > Subscriptions** on the billing account used and cancel there instead.",
      "**Verify Status & Save Proof:** Check that auto-renewal is off in the Customer Portal or app store and save your confirmation; if the portal email does not arrive within 5 minutes, check spam or re-enter your exact account email."
    ],
    paymentTip: "Web subscriptions and mobile app-store subscriptions are managed separately—always check whether your c.ai+ plan was started on the web portal or through Apple/Google Play so you cancel on the right billing rail.",
    supportScript: null
  },
  {
    id: "base44-subscription",
    name: "Base44 Subscription",
    category: "App Builder & AI Development Subscriptions",
    region: "Global",
    difficulty: "Medium",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://docs.base44.com/Account-and-billing/Billing-and-plans",
    darkPatterns: ["Workspace Owner Permission Gate", "Web vs. Apple App Store Billing Split", "Free-Plan App Limit & Unpublishing", "Account Deletion Does Not Cancel Trap"],
    summary: "Cancel a Base44 workspace subscription by clicking your workspace name > Settings > Plan & Subscriptions > More actions on your plan > Cancel plan (or via Apple Subscriptions if billed through Apple).",
    steps: [
      "**Open Workspace Plan & Subscriptions:** Sign in to **Base44**, click your **workspace name** (bottom-left on desktop, or top-left menu > workspace name on mobile web), open **Settings**, and click **Plan & Subscriptions**.",
      "**Cancel Plan (or Apple Subscription):** On your plan's row in the Subscriptions table, click the **More actions** icon and select **Cancel plan**, then confirm (if billed through **Apple**, cancel inside **iPhone/iPad Settings > [Your Name] > Subscriptions**).",
      "**Check Owner Role, Free Limits & Save Proof:** Only the **workspace owner** can cancel a workspace plan; confirm your cancellation status before your renewal date, and note that deleting your account does not cancel billing."
    ],
    paymentTip: "Cancelling stops future renewals without refunding the current period, downgrades the workspace to the Free plan at cycle end (which caps published apps and may unpublish excess apps), and does not offer a built-in pause button.",
    supportScript: null
  },
  {
    id: "supernova-subscription",
    name: "Supernova Subscription",
    category: "Education & AI Learning Subscriptions",
    region: "India",
    difficulty: "Medium",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.getsupernova.ai/refund-policy",
    darkPatterns: ["App Uninstall Does Not Cancel Trap", "Store vs. Direct / Mandate Split", "Strict No-Refund & Non-Refundable Promo Plans", "GST & Payment Gateway Deductions"],
    summary: "Cancel a Supernova AI subscription via your app store or account settings, revoke any active UPI/payment AutoPay mandate in your payment app, and contact support with your transaction ID and registered phone number if needed.",
    steps: [
      "**Cancel in App Store or Account Settings:** If subscribed through Google Play or the Apple App Store, open that store's subscriptions section and cancel the Supernova subscription there; if billed directly or via a workspace, check your account/billing settings in the app or on the web (or workspace **Billing > Subscription overview > ••• > Cancel subscription** if using Supernova.io).",
      "**Revoke AutoPay or Recurring Mandate:** If you approved a UPI AutoPay or recurring mandate in a UPI/payment app, open that payment app and cancel the mandate directly rather than relying on uninstalling the app.",
      "**Contact Support & Save Proof:** To request cancellation help or a review for an unintended charge, email `hello@gosupernova.live` or reach customer care (`+91 80690 71200` / WhatsApp `+91 89714 29757`) with your registered phone number and transaction ID, and save confirmation proof."
    ],
    paymentTip: "Uninstalling the app does not stop recurring charges, subscriptions and discounted/promotional or paid trial plans are generally non-refundable once activated, and refund reviews for unintended auto-renewals should be raised within 15 days (often excluding GST and gateway fees).",
    supportScript: null
  },
  {
    id: "facebook-subscription",
    name: "Facebook Subscription",
    category: "Social Media & Creator Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.meta.com/help/subscriptions/2534285893740819/",
    darkPatterns: ["Platform, Device & Store Billing Split", "Unfollowing Creator or Deleting App Trap", "Pre-Renewal Cutoff Window", "Wrong Google / Apple / Meta Account"],
    summary: "Cancel a Facebook subscription through the same platform, device type, and account you used to subscribe—via Meta Accounts Center / Meta Pay or in-app settings, or inside Google Play or Apple App Store subscriptions.",
    steps: [
      "**Cancel on Meta / Facebook Settings:** Open **Facebook** or **Meta Accounts Center**, go to your subscription or payment settings (such as **Settings & privacy / Accounts Center > Meta Pay / Subscriptions**, or the creator's **Subscribed** menu for creator subscriptions), and cancel auto-renewal.",
      "**Cancel via Google Play or Apple App Store:** If billed through **Google Play** (**Profile > Payments & subscriptions > Subscriptions**) or **Apple App Store** (**Settings > [Your Name] > Subscriptions**), open the exact store account that made the purchase and cancel the Facebook/Meta subscription there.",
      "**Cancel Before Renewal & Save Proof:** Cancel before your current billing period ends on the matching account and save confirmation; unfollowing a creator or deleting the Facebook app does not stop recurring billing."
    ],
    paymentTip: "Subscriptions are tied to the platform, device type, and account used to subscribe—check your Meta Pay transaction history or store receipt so you manage billing on the exact account that was charged, and remember that deleting/deactivating your Facebook account can affect connected Accounts Center access.",
    supportScript: null
  },
  {
    id: "rigi-tv-subscription",
    name: "Rigi TV Subscription",
    category: "Streaming & Short-Form Video",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://play.google.com/store/apps/details?id=com.litvibes&hl=en_IN",
    darkPatterns: ["Store vs. In-App Billing Split", "Uninstalling App Does Not Cancel Trap", "UPI / AutoPay Mandate Split", "Account Deletion Separate From Cancellation"],
    summary: "Cancel a Rigi TV subscription through Google Play (Payments & subscriptions > Subscriptions) or Apple App Store (Settings > [Name] > Subscriptions), and also revoke any linked UPI/payment AutoPay mandate or contact support@rigi.club if needed.",
    steps: [
      "**Cancel in Google Play (Android):** Open the **Google Play** store on the Google account used to subscribe, tap your **Profile icon > Payments & subscriptions > Subscriptions**, select **Rigi TV** (or **Rigi TV: Short Drama App**), and tap **Cancel subscription** following the confirmation prompts.",
      "**Cancel in Apple App Store (iOS):** Open **iPhone/iPad Settings**, tap **your name / Apple ID** at the top, select **Subscriptions**, find **Rigi TV**, and tap **Cancel Subscription** to confirm.",
      "**Revoke UPI AutoPay Mandate & Save Proof:** If you approved a UPI AutoPay or recurring payment mandate in a UPI/payment app, cancel that mandate directly as well; do not rely on uninstalling the app or deleting your account to stop billing, and reach `support@rigi.club` with your details if you need billing assistance."
    ],
    paymentTip: "Uninstalling Rigi TV does not stop recurring charges, and subscriptions are tied to the store account and billing rail used—verify that your subscription shows as cancelled/expired before your renewal date and keep proof of cancellation.",
    supportScript: null
  },
  {
    id: "snapchat-subscription",
    name: "Snapchat Subscription (Snapchat+ / Memories+)",
    category: "Social Media & Messaging Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://help.snapchat.com/hc/en-us/articles/8098571884948-How-do-I-cancel-my-subscription-to-Snapchat-or-Memories",
    darkPatterns: ["Store vs. Web Accounts Portal Billing Split", "24-Hour Pre-Renewal / Trial Cutoff on iOS", "App Uninstall Does Not Cancel Trap", "Account Deletion Separate From Cancellation"],
    summary: "Cancel a Snapchat+ or Memories+ subscription on the platform where you signed up—via Google Play for Android, Apple App Store for iOS, or the Snapchat accounts portal for web sign-ups—ideally at least 24 hours before renewal.",
    steps: [
      "**Cancel on Android (Google Play):** Open the **Google Play** app on the Google account used to purchase, tap your **Profile icon > Payments & subscriptions > Subscriptions**, select **Snapchat** (or your Snapchat+ / Memories+ plan), and tap **Cancel subscription** following the prompts.",
      "**Cancel on iOS (App Store):** Open **iPhone/iPad Settings** (or the **App Store**), tap **your name / Apple ID** at the top, select **Subscriptions**, choose **Snapchat**, and tap **Cancel Subscription** to confirm.",
      "**Cancel on Web & Verify:** If you subscribed on the web (or tap **Manage** in Snapchat and are directed to the web), sign in to the **Snapchat accounts portal** (`snapchat.com` > **Accounts** > your plan) and cancel there; complete cancellation at least **24 hours** before a trial or billing cycle ends, and save confirmation rather than relying on deleting the app or account."
    ],
    paymentTip: "Deleting the Snapchat app or deleting your Snapchat account does not cancel an active subscription, iOS trials require cancelling at least 24 hours before they end to avoid renewal, and refund requests go through whichever platform (Apple, Google, or Snap) processed the payment.",
    supportScript: null
  },
  {
    id: "moj-subscription",
    name: "Moj Subscription (Moj+)",
    category: "Streaming & Short-Form Video",
    region: "India",
    difficulty: "Medium",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://play.google.com/store/apps/details?id=in.mohalla.video&hl=en_IN",
    darkPatterns: ["Store vs. In-App Billing Split", "UPI / AutoPay Mandate Split", "App Uninstall Does Not Cancel Trap", "Account Deletion Separate From Cancellation"],
    summary: "Cancel a Moj subscription through Google Play (Payments & subscriptions > Subscriptions) or Apple App Store (Settings > [Name] > Subscriptions), and also revoke any linked UPI/payment AutoPay mandate in your payment app.",
    steps: [
      "**Cancel in Google Play (Android):** Open **Google Play** on the Google account used to subscribe, tap your **Profile icon > Payments & subscriptions > Subscriptions**, select **Moj** (or **Moj: Free Short Drama Shows**), and tap **Cancel subscription** following the confirmation prompts.",
      "**Cancel in Apple App Store (iOS):** Open **iPhone/iPad Settings**, tap **your name / Apple ID** at the top, select **Subscriptions**, find **Moj**, and tap **Cancel Subscription** to confirm.",
      "**Revoke UPI AutoPay Mandate & Save Proof:** If you approved a UPI AutoPay or recurring mandate in a UPI/payment app (such as Google Pay, PhonePe, or Paytm), cancel that mandate directly as well; do not rely on uninstalling Moj or deleting your account to stop billing, and reach `contact@sharechat.co` or your store's billing support with your transaction details and confirmation screenshot if needed."
    ],
    paymentTip: "Uninstalling Moj or deleting your in-app profile does not stop recurring charges, and if a UPI/payment app shows a mandate cannot be edited or cancelled directly, verify your active subscription status in Google Play or Apple Subscriptions and contact the billing channel or `contact@sharechat.co` with proof.",
    supportScript: null
  },
  {
    id: "myjio-autopay-subscription",
    name: "MyJio Subscription & JioAutoPay",
    category: "Telecom & Recurring Mandates",
    region: "India",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://www.jio.com/help/faq/mobile/payments/autopay/how-can-i-cancel-jioautopay/",
    darkPatterns: ["Early Debit Trigger Before Plan Expiry", "Mandate vs. UPI App / Store Billing Split", "Strict Time Window for Recharge Reversals", "Account / App Deletion Does Not Cancel Trap"],
    summary: "Cancel JioAutoPay in the MyJio app under Menu > JioPay > JioAutoPay by selecting your linked bank/card mandate and tapping Cancel—and also check any UPI AutoPay mandate or app store subscription billed externally.",
    steps: [
      "**Cancel JioAutoPay in MyJio:** Open the **MyJio** app, tap the **Menu** icon (top-left), go to **JioPay > JioAutoPay**, select the linked bank or card mandate, and tap **Cancel** to confirm.",
      "**Check UPI Mandates & App Stores:** If you set up a UPI AutoPay mandate in a payment app (such as Google Pay, PhonePe, or Paytm) or billed a third-party/bundle subscription via **Google Play** or **Apple Subscriptions**, cancel it there as well—and if you need to reverse an eligible direct MyJio/Jio.com recharge mistake, check **Recharges & History** within the allowed window (typically within 3 hours for standard plans or 2 hours for ISD/roaming, or 30 days if in Upcoming status).",
      "**Verify Before Expiry & Save Proof:** Confirm that JioAutoPay shows as cancelled before your plan's renewal/debit trigger (JioAutoPay can present charges to the bank up to **5 days** before plan expiry or at **90%** data usage on non-daily-FUP long-term plans), and save confirmation."
    ],
    paymentTip: "Cancelling JioAutoPay stops future automatic debits on that mandate, while uninstalling MyJio does not cancel recurring mandates or third-party store subscriptions—and accidental recharge reversals only apply to eligible direct MyJio/Jio.com recharges within strict time and usage limits.",
    supportScript: null
  },
  {
    id: "sonyliv-subscription",
    name: "Sony LIV Subscription",
    category: "Streaming & OTT Subscriptions",
    region: "India",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://help.sonyliv.com/categories/cat-subscription/articles/how-can-i-cancel-my-subscription",
    darkPatterns: ["Direct vs. Store / Bundle Billing Split", "App Uninstall Does Not Cancel Trap", "OTT Aggregator / Telecom Bundle Routing", "Account Deletion Separate From Cancellation"],
    summary: "Cancel a direct Sony LIV subscription under My Purchases > Cancel (or revoke any linked UPI/payment mandate), or cancel through Google Play, Apple App Store, Amazon, or your bundle/telecom provider if billed externally.",
    steps: [
      "**Cancel Direct Sony LIV Purchases:** Sign in to **Sony LIV** on the app or website, open **My Account / Profile > My Purchases**, select **Cancel**, choose your cancellation reason, and submit (and revoke any linked UPI AutoPay or recurring mandate in your payment/banking app if auto-debited).",
      "**Cancel via App Store, Amazon, or Bundle:** If billed through **Google Play** (**Payments & subscriptions > Subscriptions**), **Apple App Store** (**Settings > [Your Name] > Subscriptions**), **Amazon** (**Memberships & Subscriptions > Manage Subscription**), or a telecom/OTT bundle provider, cancel on that exact billing platform.",
      "**Verify Status & Save Proof:** Check that auto-renewal shows as off/cancelled on the billing platform you used; do not rely on uninstalling the Sony LIV app or submitting an account deletion request to stop third-party or recurring billing."
    ],
    paymentTip: "Sony LIV billing depends on where you subscribed—direct card/UPI/wallet purchases are managed under My Purchases, while Google Play, Apple, Amazon, or bundle/operator plans must be cancelled through that billing owner.",
    supportScript: null
  },
  {
    id: "vn-video-editor",
    name: "VN Subscription (VN Pro)",
    category: "Video Editing & Creator Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://vlognow.me/help/others/vn-pro-issues/",
    darkPatterns: ["Store vs. In-App Billing Split", "Platform-Locked Subscriptions (iOS / Android / macOS)", "App Uninstall Does Not Cancel Trap", "Stale Pro Status / UPI Mandate Split"],
    summary: "Cancel a VN Pro subscription through Google Play (Payments & subscriptions > Subscriptions) on Android or Apple App Store / iOS Settings (Subscriptions) on Apple devices—and also revoke any linked UPI AutoPay mandate if billed via UPI.",
    steps: [
      "**Cancel on Android (Google Play):** Open **Google Play** on the Google account used to subscribe, tap your **Profile icon > Payments & subscriptions > Subscriptions**, select **VN: Photo & Video Editor** (or **VN Pro**), and tap **Cancel subscription** following the confirmation prompts.",
      "**Cancel on iOS or macOS (Apple Subscriptions):** Open **Settings** on iPhone/iPad (or **System Settings** on Mac), tap **your name / Apple ID** at the top, select **Subscriptions**, choose **VN: Photo & Video Editor**, and tap **Cancel Subscription** to confirm.",
      "**Revoke UPI Mandate & Save Proof:** If you approved a UPI AutoPay mandate in a payment app, cancel that mandate directly as well; do not rely on uninstalling VN to stop billing, and save confirmation proof (or contact `vn.support+android@ui.com` / `vn.support+ios@ui.com` or your app store's billing support if a charge occurs despite cancellation)."
    ],
    paymentTip: "Uninstalling VN does not cancel an active subscription, VN Pro subscriptions are tied to the specific platform (iOS, Android, or macOS) and store account used to purchase, and refunds for billed charges are requested through Google Play or Apple (`reportaproblem.apple.com`).",
    supportScript: null
  },
  {
    id: "playit-subscription",
    name: "PlayIt Subscription",
    category: "Media Players & Utility Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.google.com/googleplay/answer/7018481",
    darkPatterns: ["Store vs. In-App Billing Split", "App Uninstall Does Not Cancel Trap", "UPI / AutoPay Mandate Split", "Wrong Google / Apple Account"],
    summary: "Cancel a PlayIt subscription through Google Play (Payments & subscriptions > Subscriptions) on Android or Apple App Store (Settings > [Name] > Subscriptions) on iOS, and revoke any linked UPI AutoPay mandate if billed via UPI.",
    steps: [
      "**Cancel in Google Play (Android):** Open **Google Play** on the Google account used to subscribe, tap your **Profile icon > Payments & subscriptions > Subscriptions**, select the **PlayIt** subscription, and tap **Cancel subscription** following the confirmation prompts.",
      "**Cancel in Apple App Store (iOS):** Open **iPhone/iPad Settings**, tap **your name / Apple ID** at the top, select **Subscriptions**, find the **PlayIt** subscription, and tap **Cancel Subscription** to confirm.",
      "**Revoke UPI Mandate & Save Proof:** If you approved a UPI AutoPay or recurring mandate in a payment app, cancel that mandate directly as well; do not rely on uninstalling PlayIt to stop billing, and save your cancellation confirmation."
    ],
    paymentTip: "Uninstalling PlayIt does not cancel an active subscription, and if you do not see the subscription listed, check that you are signed into the exact Google account or Apple ID used for purchase—also verify any UPI mandate separately if UPI Autopay was set up.",
    supportScript: null
  },
  {
    id: "quick-tv-subscription",
    name: "Quick TV Subscription",
    category: "Streaming & Short-Form Video",
    region: "India",
    difficulty: "Medium",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://quicktv.co.in/terms",
    darkPatterns: ["Trial-to-Paid Auto-Renewal Trap", "Store vs. Direct / UPI Mandate Split", "App Uninstall Does Not Cancel Trap", "No Partial-Cycle or Unviewed-Content Refunds"],
    summary: "Cancel a Quick TV subscription before renewal via Google Play (or your app store) and/or inside the app, and revoke any active UPI AutoPay or payment mandate in your UPI or banking app.",
    steps: [
      "**Cancel in Google Play / App Store or App:** Open **Google Play** on the charged Google account, tap your **Profile icon > Payments & subscriptions > Subscriptions**, select **Quick TV**, and tap **Cancel subscription** (or check your subscription settings inside the **Quick TV** app if billed directly).",
      "**Revoke UPI AutoPay or Recurring Mandate:** If you authorized a UPI AutoPay mandate (in Google Pay, PhonePe, Paytm, BHIM, or another UPI/payment app) or card/bank mandate, open that payment app and cancel the active **Quick TV** mandate directly.",
      "**Contact Support if Needed & Save Proof:** If you need assistance or want to report a billing issue, email `support@quicktv.co.in` with your contact details and transaction/service info; do not rely on uninstalling Quick TV to stop future renewals, and save your confirmation proof."
    ],
    paymentTip: "Low-cost trial offers can auto-renew into a higher-priced recurring plan if not cancelled before the renewal date, uninstalling the app does not stop billing, and Quick TV's terms state subscription fees are generally non-refundable with no refunds or credits for partial cycles or unviewed content (except billing errors or where required by law).",
    supportScript: null
  },
  {
    id: "sharechat-subscription",
    name: "ShareChat Subscription (ShareChat Blue / AutoPay)",
    category: "Social Media & Creator Subscriptions",
    region: "India",
    difficulty: "Medium",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://help.sharechat.com/policies/sharechat-blue-faq",
    darkPatterns: ["Third-Party Store / UPI Mandate Billing Split", "App Uninstall Does Not Cancel Trap", "Account Deletion Separate From Cancellation", "Queued / Retry Mandate Debit Confusion"],
    summary: "Cancel a ShareChat subscription through the platform or payment rail that billed you—via Google Play or Apple Subscriptions, and by revoking any active UPI AutoPay or recurring mandate in your payment app.",
    steps: [
      "**Cancel in Google Play or Apple Subscriptions:** Open **Google Play** on the charged Google account (**Profile > Payments & subscriptions > Subscriptions**), select **ShareChat**, and tap **Cancel subscription** (or open **iOS Settings > [Your Name] > Subscriptions** if billed via Apple).",
      "**Revoke UPI AutoPay or Payment Mandate:** ShareChat notes that subscriptions bought through third-party payment providers are cancelled through that provider—so if you authorized a UPI AutoPay mandate (in Google Pay, PhonePe, Paytm, BHIM, or another UPI/payment app), open that app's **AutoPay / Mandates** section and cancel/revoke the **ShareChat** mandate with your UPI PIN.",
      "**Verify Status & Save Proof:** Confirm that both the store subscription (if applicable) and the UPI/payment mandate show as cancelled/revoked before your next billing window; do not rely on uninstalling ShareChat or deleting your account to stop billing, and keep confirmation screenshots or support records (`contact@sharechat.co` or store refund flow) if needed."
    ],
    paymentTip: "Uninstalling ShareChat or deleting your app account does not stop recurring charges—always check the exact store account and UPI/payment app that created the mandate, and note that revoking a mandate stops future debits rather than automatically refunding completed transactions.",
    supportScript: null
  },
  {
    id: "astro99-subscription",
    name: "Astro99 Subscription & AutoPay",
    category: "Lifestyle & Astrology Subscriptions",
    region: "India",
    difficulty: "Medium",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.google.com/googleplay/answer/7018481",
    darkPatterns: ["UPI / AutoPay Mandate Split", "Trial-to-Paid Auto-Renewal Trap", "App Uninstall Does Not Cancel Trap", "No Automatic Past-Debit Refunds"],
    summary: "Cancel an Astro99 recurring charge by revoking any active UPI AutoPay mandate in your payment app, cancelling any store subscription in Google Play or Apple Subscriptions, and checking in-app/billing settings before renewal.",
    steps: [
      "**Revoke UPI AutoPay or Payment Mandate:** Open the UPI or payment app used to authorize auto-debits (such as Google Pay, PhonePe, Paytm, or BHIM), open **AutoPay / Mandates**, select the **Astro99** mandate, and cancel/revoke it with your **UPI PIN**.",
      "**Cancel Store Subscription & Check App Settings:** If billed through **Google Play**, open **Profile > Payments & subscriptions > Subscriptions**, select the subscription, and tap **Cancel subscription** (or check **Apple Subscriptions** on iOS and subscription/wallet settings inside the app).",
      "**Verify Before Renewal & Save Proof:** Confirm that the mandate and store subscription show as cancelled/inactive prior to the next billing date; do not rely on uninstalling the app to stop recurring billing, and save confirmation screenshots or support records if you need to request help."
    ],
    paymentTip: "Uninstalling the app does not cancel a UPI AutoPay mandate or store subscription, revoking a mandate blocks future auto-debits rather than automatically refunding completed payments, and checking payment history for the exact merchant/mandate name helps prevent missed renewals.",
    supportScript: null
  },
  {
    id: "master-subscription",
    name: "Master Subscription & AutoPay",
    category: "Streaming & Learning Subscriptions",
    region: "India",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://masteredu.ai/faq",
    darkPatterns: ["1-Day Low-Cost Trial Auto-Renewal", "Store vs. UPI Mandate Billing Split", "No Refund After UPI Plan Starts", "App Uninstall Does Not Cancel Trap"],
    summary: "Cancel a Master subscription under Profile > Subscription Settings > Cancel Subscription in the app, and also cancel any active UPI AutoPay mandate in your payment app or subscription in Google Play.",
    steps: [
      "**Cancel in Master App Settings:** Open the **Master** app, go to **Profile > Subscription Settings**, select **Cancel Subscription**, and follow the on-screen steps.",
      "**Cancel UPI AutoPay Mandate or Google Play Plan:** If you paid via a UPI app (such as Google Pay, PhonePe, or Paytm), open that app's **AutoPay / Subscription / Mandate** section and cancel the mandate; if billed via **Google Play**, open **Payments & subscriptions > Subscriptions**, select **Master**, and tap **Cancel subscription**.",
      "**Cancel Before Trial Ends & Save Proof:** Cancel before a short trial period ends to prevent automatic renewal charges, keep access through the current paid cycle, and save confirmation proof (or contact `support@masteredu.ai` if you need assistance)."
    ],
    paymentTip: "Short introductory trials auto-renew into paid subscription cycles if not cancelled in time, uninstalling the app does not stop billing, and UPI payments generally offer no refund once the plan starts (except narrow duplicate/technical-error cases under the refund policy).",
    supportScript: null
  },
  {
    id: "inshot-pro-subscription",
    name: "InShot Subscription (InShot Pro)",
    category: "Video Editing & Creator Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.google.com/googleplay/answer/7018481",
    darkPatterns: ["Store vs. In-App Billing Split", "App Uninstall Does Not Cancel Trap", "24-Hour Trial Cutoff on Apple", "Wrong Store Account Mismatch"],
    summary: "Cancel an InShot Pro subscription through Google Play (Payments & subscriptions > Subscriptions) on Android or Apple App Store / iOS Settings (Subscriptions) on iOS—and revoke any linked UPI AutoPay mandate if billed via UPI.",
    steps: [
      "**Cancel in Google Play (Android):** Open **Google Play** on the Google account used to purchase, tap your **Profile icon > Payments & subscriptions > Subscriptions**, select **InShot** (or **InShot - Video Editor**), and tap **Cancel subscription** following the confirmation prompts.",
      "**Cancel in Apple App Store (iOS):** Open **iPhone/iPad Settings** (or the **App Store**), tap **your name / Apple ID** at the top, select **Subscriptions**, choose **InShot**, and tap **Cancel Subscription** to confirm.",
      "**Revoke UPI Mandate & Save Proof:** If you approved a UPI AutoPay or recurring payment mandate in a UPI app, cancel that mandate directly as well; do not rely on uninstalling InShot to stop billing, and save your cancellation confirmation."
    ],
    paymentTip: "Uninstalling InShot does not cancel an active subscription, trials on Apple should be cancelled at least 24 hours before they end to avoid renewal, and refund requests for billed charges go through Google Play or Apple's report-a-problem flow rather than app removal alone.",
    supportScript: null
  },
  {
    id: "pinterest-subscription-billing",
    name: "Pinterest Subscription & Ads Billing",
    category: "Social Media & Advertising Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.google.com/googleplay/answer/7018481",
    darkPatterns: ["App Store vs. Ads Manager Billing Split", "Account Deletion Does Not Cancel Store Billing", "App Uninstall Trap", "Linked Business Profile Deletion Risk"],
    summary: "Cancel a Pinterest store subscription in Google Play or Apple Subscriptions, pause campaigns and clear balances in Pinterest Ads Manager if running ads, and cancel billing separately from deleting your Pinterest account.",
    steps: [
      "**Cancel Store Subscription (Android / iOS):** Open **Google Play > Profile > Payments & subscriptions > Subscriptions** (or **iOS Settings > [Your Name] > Subscriptions** on iPhone/iPad), select the **Pinterest** subscription on the billing account used, and tap **Cancel subscription** following the prompts.",
      "**Stop Ad Campaigns & Check Billing (Business / Ads):** If you use **Pinterest Ads Manager**, pause active campaigns, settle any pending or outstanding ad balances, and review billing/payment settings so new ad charges do not accrue.",
      "**Verify Before Deleting Account or App & Save Proof:** Confirm your subscription shows as cancelled/expired before your renewal date; do not rely on uninstalling the Pinterest app or requesting account deletion (**Settings > Account management > Delete your data and account**, which requires an email confirmation link and has a grace period) alone to stop recurring store billing, and save your confirmation."
    ],
    paymentTip: "Deleting your Pinterest account or uninstalling the app does not automatically cancel an active Google Play or Apple subscription—always verify cancellation on the exact store account or ad billing dashboard used, and unlink any business profile you want to keep before deleting a personal account.",
    supportScript: null
  },
  {
    id: "freedrama-subscription",
    name: "FreeDrama Subscription (FreeDrama: Short Drama & Reels)",
    category: "Streaming & Short-Form Video",
    region: "India",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://play.google.com/store/apps/details?id=com.drama.free&hl=en_IN",
    darkPatterns: ["Store vs. In-App / UPI Mandate Billing Split", "Uninstalling App Does Not Cancel Trap", "Account Deletion Separate From Cancellation", "Low-Cost Trial / Ad-Free Plan Auto-Renewal"],
    summary: "Cancel a FreeDrama subscription through Google Play (Payments & subscriptions > Subscriptions) or Apple App Store (Settings > [Name] > Subscriptions), and revoke any linked UPI AutoPay mandate if billed via UPI.",
    steps: [
      "**Cancel in Google Play (Android):** Open **Google Play** on the Google account used to purchase, tap your **Profile icon > Payments & subscriptions > Subscriptions**, select **FreeDrama: Short Drama & Reels**, and tap **Cancel subscription** following the confirmation prompts.",
      "**Cancel in Apple App Store (iOS):** Open **iPhone/iPad Settings**, tap **your name / Apple ID** at the top, select **Subscriptions**, choose **FreeDrama: Short Drama & Reels**, and tap **Cancel Subscription** to confirm.",
      "**Revoke UPI Mandate & Save Proof:** If you approved a UPI AutoPay mandate in a payment app (such as Google Pay, PhonePe, or Paytm), cancel that mandate directly as well; do not rely on uninstalling the app or deleting your in-app account to stop billing, and keep confirmation proof or contact support (`support@kukufm.com` / store refund flow) if needed."
    ],
    paymentTip: "Uninstalling FreeDrama does not stop recurring billing, deleting your account is separate from cancelling the subscription, and store refunds for billed charges are requested through Google Play order history or Apple's reportaproblem.apple.com rather than app removal alone.",
    supportScript: null
  },
  {
    id: "story-max-subscription",
    name: "Story MAX Subscription & AutoPay",
    category: "Streaming & Short-Form Video",
    region: "India",
    difficulty: "Medium",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://storymax.in/refund",
    darkPatterns: ["Dual App + Payment Auto-Pay Mandate Requirement", "Strict No-Refund & No Pro-Rata Refund Policy", "App Uninstall Does Not Cancel Trap", "Trial-to-Paid Auto-Renewal"],
    summary: "Cancel auto-renewal inside the Story MAX app before the current term expires, and also revoke any recurring payment or UPI AutoPay mandate in your payment app or bank.",
    steps: [
      "**Cancel in Story MAX App Before Expiry:** Open the **Story MAX** app, go to your account/subscription settings, and cancel auto-renewal before the expiry date of your current trial or subscription period so you keep access for the paid term without renewing into the next one.",
      "**Revoke UPI AutoPay or Payment Mandate:** Story MAX requires users to cancel recurring payments or auto-pay mandates on their payment method in addition to cancelling in the app—open your UPI/payment app (such as Google Pay, PhonePe, or Paytm) or bank mandate settings and cancel the active mandate.",
      "**Contact Support & Save Proof:** Do not rely on uninstalling the app alone to stop billing, save confirmation screenshots, and if you need assistance or wish to inquire about an exceptional refund case (such as duplicate/erroneous charges or non-delivery due to a technical error), email `support@storymax.app` or call `+91-7349292866` / `+916364928912`."
    ],
    paymentTip: "All Story MAX purchases (trials, monthly, quarterly, and annual plans) are generally final and non-refundable with no partial or pro-rata refunds, and cancelling after a renewal period starts does not refund that auto-renewed cycle—approved refunds (typically within 7–10 working days) are limited to narrow exceptions like duplicate charges or technical non-delivery.",
    supportScript: null
  },
  {
    id: "sherubhai-game-subscription",
    name: "Sherubhai Game Subscription & AutoPay",
    category: "Gaming & In-App Subscriptions",
    region: "India",
    difficulty: "Medium",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.google.com/googleplay/answer/7018481",
    darkPatterns: ["Store vs. UPI Mandate Billing Split", "Uninstalling Game Does Not Cancel Trap", "Unverified / Third-Party Payment Routing", "No Automatic Past-Debit Refunds"],
    summary: "Cancel a Sherubhai Game subscription through your app store (such as Google Play Subscriptions) and revoke any active UPI AutoPay or recurring payment mandate in your payment or banking app before renewal.",
    steps: [
      "**Cancel Store Subscription (If Applicable):** Open **Google Play** on the Google account used for payment, tap your **Profile icon > Payments & subscriptions > Subscriptions**, select the game or subscription entry if listed, and tap **Cancel subscription** following the prompts (or check **Apple Subscriptions** on iOS).",
      "**Revoke UPI AutoPay or Payment Mandate:** Open the UPI or payment app where auto-debits were authorized (such as Google Pay, PhonePe, Paytm, or BHIM), open **AutoPay / Mandates**, locate any active mandate for the game or merchant, and cancel/revoke it with your **UPI PIN** (or check standing instructions/e-mandates in your bank app).",
      "**Verify Before Renewal & Save Proof:** Confirm that any store subscription and UPI mandate show as cancelled/revoked prior to the next billing date; do not rely on uninstalling the game to stop recurring charges, and save confirmation screenshots or transaction references if you need to raise a dispute or support request with your payment provider/bank."
    ],
    paymentTip: "Uninstalling a game does not cancel recurring store billing or UPI AutoPay mandates, revoking a mandate stops future scheduled debits rather than automatically refunding already-processed payments, and no public official cancellation/refund page is verified for Sherubhai Game—so verify the exact merchant name on your transaction statement and contact your UPI app, card issuer, or bank if unauthorized or recurring debits persist.",
    supportScript: null
  },
  {
    id: "ludo-king-subscription",
    name: "Ludo King Subscription & AutoPay",
    category: "Gaming & In-App Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.google.com/googleplay/answer/7018481",
    darkPatterns: ["Store vs. In-App Billing Split", "App Uninstall Does Not Cancel Trap", "Multiple Google / Apple Accounts", "Strict No-Refund Policy on In-App Purchases"],
    summary: "Cancel a Ludo King subscription through Google Play (Payments & subscriptions > Subscriptions) on Android or Apple App Store (Settings > [Name] > Subscriptions) on iOS, and revoke any linked UPI AutoPay mandate if billed via UPI.",
    steps: [
      "**Cancel in Google Play (Android):** Open **Google Play** on the Google account used to purchase, tap your **Profile icon > Payments & subscriptions > Subscriptions**, select **Ludo King**, and tap **Cancel subscription** following the confirmation prompts.",
      "**Cancel in Apple App Store (iOS):** Open **iPhone/iPad Settings**, tap **your name / Apple ID** at the top, select **Subscriptions**, find **Ludo King**, and tap **Cancel Subscription** to confirm.",
      "**Revoke UPI Mandate & Save Proof:** If you approved a UPI AutoPay mandate in a payment app (such as Google Pay, PhonePe, or Paytm), cancel that mandate directly as well; do not rely on uninstalling Ludo King or deleting your account to stop billing, and save your cancellation confirmation."
    ],
    paymentTip: "Uninstalling Ludo King or deleting your in-game account does not cancel an active store subscription, Gametion follows a no-refund policy for in-app purchases (with any store refund requests handled through Google Play or Apple's reportaproblem.apple.com rather than by the game developer), and if a charge still appears after cancelling, check that you are signed into the exact Google account or Apple ID used for purchase.",
    supportScript: null
  },
  {
    id: "my-talking-tom-subscription",
    name: "My Talking Tom Subscription & AutoPay",
    category: "Gaming & In-App Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.google.com/googleplay/answer/7018481",
    darkPatterns: ["Store vs. In-App Billing Split", "App Uninstall Does Not Cancel Trap", "24-Hour Pre-Renewal / Trial Cutoff", "Multiple Google / Apple Accounts"],
    summary: "Cancel a My Talking Tom subscription through Google Play (Payments & subscriptions > Subscriptions) on Android or Apple App Store (Settings > [Name] > Subscriptions) on iOS at least 24 hours before renewal—and revoke any linked UPI AutoPay mandate if billed via UPI.",
    steps: [
      "**Cancel in Google Play (Android):** Open **Google Play** on the Google account used to subscribe, tap your **Profile icon > Payments & subscriptions > Subscriptions**, select **My Talking Tom**, and tap **Cancel subscription** following the confirmation prompts.",
      "**Cancel in Apple App Store (iOS):** Open **iPhone/iPad Settings**, tap **your name / Apple ID** at the top, select **Subscriptions**, find **My Talking Tom**, and tap **Cancel Subscription** to confirm.",
      "**Revoke UPI Mandate & Save Proof:** If you approved a UPI AutoPay or recurring payment mandate in a payment app (such as Google Pay, PhonePe, or Paytm), cancel that mandate directly as well; complete cancellation at least **24 hours** before renewal, do not rely on uninstalling the game to stop billing, and save your confirmation (or contact `support@outfit7.com` / your store's billing support if needed)."
    ],
    paymentTip: "Uninstalling My Talking Tom does not cancel an active subscription, subscriptions renew automatically unless cancelled at least 24 hours before the end of the current period, and if you do not see the plan listed, make sure you checked the exact Google account or Apple ID used for purchase.",
    supportScript: null
  },
  {
    id: "worms-zone-subscription",
    name: "Worms Zone Subscription & AutoPay",
    category: "Gaming & In-App Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.google.com/googleplay/answer/7018481",
    darkPatterns: ["Store vs. In-App Billing Split", "Uninstalling Game Does Not Cancel Trap", "Account Deletion Separate From Cancellation", "Multiple Google / Apple Accounts"],
    summary: "Cancel a Worms Zone subscription through Google Play (Payments & subscriptions > Subscriptions) on Android or Apple App Store (Settings > [Name] > Subscriptions) on iOS, and revoke any linked UPI AutoPay mandate if billed via UPI.",
    steps: [
      "**Cancel in Google Play (Android):** Open **Google Play** on the Google account used to purchase, tap your **Profile icon > Payments & subscriptions > Subscriptions**, select **Worms Zone** (or **Worms Zone .io - Hungry Snake**), and tap **Cancel subscription** following the confirmation prompts.",
      "**Cancel in Apple App Store (iOS):** Open **iPhone/iPad Settings**, tap **your name / Apple ID** at the top, select **Subscriptions**, find **Worms Zone**, and tap **Cancel Subscription** to confirm.",
      "**Revoke UPI Mandate & Save Proof:** If you approved a UPI AutoPay or recurring mandate in a payment app (such as Google Pay, PhonePe, or Paytm), cancel that mandate directly as well; do not rely on uninstalling the game or deleting your in-app account to stop billing, and save your cancellation confirmation."
    ],
    paymentTip: "Uninstalling Worms Zone or deleting your in-game account does not cancel an active store subscription, cancelling stops future renewals while letting you keep benefits through the end of the current paid period, and any refund requests for billed charges are submitted through Google Play order history or Apple's reportaproblem.apple.com.",
    supportScript: null
  },
  {
    id: "minecraft-subscription",
    name: "Minecraft Subscription (Realms / Marketplace Pass)",
    category: "Gaming & In-App Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://help.minecraft.net/hc/en-us/articles/24292373076749-Cancel-a-Minecraft-Marketplace-Pass-Subscription",
    darkPatterns: ["Platform & Store Billing Split", "18-Month Realm Deletion Window After Cancellation", "App Uninstall Does Not Cancel Trap", "Account Mismatch Across Devices"],
    summary: "Cancel a Minecraft Realms or Marketplace Pass subscription on the store platform where you started it—via your Microsoft Account on PC/Xbox, Google Play on Android/Chromebook, Apple Subscriptions on iOS, or Nintendo/PlayStation store settings.",
    steps: [
      "**Cancel on PC or Xbox (Microsoft Account):** Sign in to your **Microsoft Account** in a browser (or **Services & Subscriptions** for Xbox), open **Subscriptions**, find your **Minecraft Realms** or **Marketplace Pass** subscription, and select **Manage > Cancel subscription** (confirming in the prompt).",
      "**Cancel on Mobile or Console Store:** On **Android/Chromebook**, open **Google Play > Payments & subscriptions > Subscriptions** (or **My subscriptions**), select the Minecraft plan, and tap **Cancel subscription**; on **iOS**, open **Settings > [Your Name] > Subscriptions** and tap **Cancel Subscription**; on **Nintendo Switch** or **PlayStation**, turn off automatic renewal in **Nintendo eShop** or **PlayStation Account Management**.",
      "**Revoke Linked UPI Mandate & Save Proof:** If you approved a UPI AutoPay mandate in a payment app, cancel that mandate directly as well; do not rely on uninstalling Minecraft to stop billing, back up any important Realm worlds before the 18-month deletion window expires after cancellation, and save your confirmation."
    ],
    paymentTip: "Minecraft subscriptions are tied to the store platform and account where you purchased them rather than cancelled by uninstalling the game—also note that cancelled Realms can be permanently deleted 18 months after cancellation and cannot be restarted once deleted.",
    supportScript: null
  },
  {
    id: "candy-crush-subscription",
    name: "Candy Crush Subscription & In-App Billing",
    category: "Gaming & In-App Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.google.com/googleplay/answer/7018481",
    darkPatterns: ["One-Time IAP vs. Recurring Subscription Confusion", "App Uninstall Does Not Cancel Trap", "Multiple Google / Apple Accounts", "UPI Mandate / Store Billing Split"],
    summary: "Check and cancel any Candy Crush subscription in Google Play (Payments & subscriptions > Subscriptions) on Android or Apple App Store (Settings > [Name] > Subscriptions) on iOS—and revoke any linked UPI AutoPay mandate if billed via UPI.",
    steps: [
      "**Cancel in Google Play (Android):** Open **Google Play** on the Google account used for payment, tap your **Profile icon > Payments & subscriptions > Subscriptions**, check if any Candy Crush subscription is active, and tap **Cancel subscription** following the prompts.",
      "**Cancel in Apple App Store (iOS):** Open **iPhone/iPad Settings**, tap **your name / Apple ID** at the top, select **Subscriptions**, check for any Candy Crush subscription, and tap **Cancel Subscription** to confirm.",
      "**Revoke Linked UPI Mandate & Save Proof:** If you approved a UPI AutoPay mandate in a payment app, cancel that mandate directly as well; remember that Candy Crush is largely free-to-play with instantaneous one-time item/gold purchases rather than a default recurring subscription, uninstalling the game does not cancel an active subscription, and refund requests for one-time or billed charges go through Google Play order history (`Report a problem`), Apple's `reportaproblem.apple.com`, or King Player Support (`Settings > ?` in-game)."
    ],
    paymentTip: "Uninstalling Candy Crush does not stop recurring store billing, and many charges in Candy Crush are one-time in-app purchases rather than recurring subscriptions—so check your subscription list and payment statement for the exact billed item and account before requesting a refund.",
    supportScript: null
  },
  {
    id: "roblox-subscription",
    name: "Roblox Subscription (Roblox Premium & Experiences)",
    category: "Gaming & In-App Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://en.help.roblox.com/hc/en-us/articles/360024256251-Roblox-Premium-Membership",
    darkPatterns: ["Web/Desktop vs. App Store Billing Split", "Mobile App Cannot Cancel Directly Trap", "Missing Cancel Button During Renewal / Already Cancelled", "No Refund for Renewed Cycles"],
    summary: "Cancel a Roblox subscription on the exact platform where you started it—via Settings > Subscriptions > Cancel Renewal on web/desktop, or inside Google Play or Apple Subscriptions for mobile app purchases—and revoke any linked UPI AutoPay mandate if billed via UPI.",
    steps: [
      "**Cancel on Web or Desktop (Direct Billing):** Sign in to **Roblox** on a web browser or desktop app, open **Settings (gear icon) > Subscriptions**, locate your **Roblox Premium** membership or experience subscription, and click **Cancel Renewal** following the confirmation prompts.",
      "**Cancel on Android or iOS (Store Billing):** Mobile app subscriptions are not cancelled inside Roblox itself—open **Google Play > Profile > Payments & subscriptions > Subscriptions** on Android (on the exact Google account that purchased) or **iOS Settings > [Your Name] > Subscriptions** on iPhone/iPad, select **Roblox**, and cancel the subscription there.",
      "**Revoke UPI Mandate & Save Proof:** If you approved a UPI AutoPay mandate in a payment app, cancel that mandate directly as well; cancel before your renewal date (at least 24 hours ahead is recommended), keep your existing Robux and benefits through the end of the current paid cycle, and save confirmation proof."
    ],
    paymentTip: "Uninstalling Roblox does not cancel a recurring subscription, renewed charges are non-refundable, and if a Cancel button is missing or greyed out, the plan may already be set to expire, mid-renewal, or managed in your app store rather than on the Roblox website.",
    supportScript: null
  },
  {
    id: "moba-legends-subscription",
    name: "MOBA Legends Subscription & AutoPay",
    category: "Gaming & In-App Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.google.com/googleplay/answer/7018481",
    darkPatterns: ["Store vs. In-App Billing Split", "App Uninstall Does Not Cancel Trap", "Multiple Google / Apple Accounts", "UPI Mandate / Store Billing Split"],
    summary: "Cancel a MOBA Legends subscription in Google Play (Payments & subscriptions > Subscriptions) on Android or Apple App Store (Settings > [Name] > Subscriptions) on iOS—and revoke any linked UPI AutoPay mandate if billed via UPI.",
    steps: [
      "**Cancel in Google Play (Android):** Open **Google Play** on the Google account used to purchase, tap your **Profile icon > Payments & subscriptions > Subscriptions**, select the **MOBA Legends** subscription, and tap **Cancel subscription** following the confirmation prompts.",
      "**Cancel in Apple App Store (iOS):** Open **iPhone/iPad Settings**, tap **your name / Apple ID** at the top, select **Subscriptions**, find the **MOBA Legends** subscription, and tap **Cancel Subscription** to confirm.",
      "**Revoke UPI Mandate & Save Proof:** If you approved a UPI AutoPay or recurring mandate in a payment app (such as Google Pay, PhonePe, or Paytm), cancel that mandate directly as well; do not rely on uninstalling the game or deleting your game account to stop billing, and save your cancellation confirmation."
    ],
    paymentTip: "Uninstalling the game or deleting your in-game account does not cancel a recurring store subscription or UPI mandate, and if you do not see the plan under Subscriptions, check that you are signed into the exact Google account or Apple ID—and exact merchant/mandate name—used when the purchase was billed.",
    supportScript: null
  },
  {
    id: "clash-of-clans-subscription",
    name: "Clash of Clans Subscription & Billing",
    category: "Gaming & In-App Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.supercell.com/supercell-store/en/articles/sub-terms-of-use.html",
    darkPatterns: ["Store vs. Supercell Store Billing Split", "One-Time Pass vs. Recurring Subscription Confusion", "App Uninstall Does Not Cancel Trap", "Multiple Google / Apple Accounts"],
    summary: "Cancel a Clash of Clans subscription on the exact platform where you started it—via Google Play on Android, Apple App Store on iOS, or the Supercell Store subscription portal if subscribed directly through Supercell—and revoke any linked UPI AutoPay mandate.",
    steps: [
      "**Cancel in Google Play or Apple Subscriptions:** On **Android**, open **Google Play > Profile > Payments & subscriptions > Subscriptions** on the charged Google account, select **Clash of Clans**, and tap **Cancel subscription**; on **iOS**, open **Settings > [Your Name] > Subscriptions**, select **Clash of Clans**, and tap **Cancel Subscription**.",
      "**Check Supercell Store & Linked UPI Mandate:** If you started a subscription on the Supercell Store, manage or cancel it via `store.supercell.com/subscription`; if you approved a UPI AutoPay or recurring mandate in a UPI/payment app, revoke that mandate directly as well.",
      "**Verify Before Renewal & Save Proof:** Confirm that auto-renewal is turned off before your next cycle; do not rely on uninstalling Clash of Clans to stop billing, and note that passes/in-app items are typically one-time purchases unless set up as recurring subscriptions."
    ],
    paymentTip: "Uninstalling Clash of Clans or deleting your game account does not cancel an active store or Supercell Store subscription—always verify the exact billing platform and account used, and keep confirmation proof before your renewal date.",
    supportScript: null
  },
  {
    id: "asphalt-unite-subscription",
    name: "Asphalt Unite Subscription & AutoPay",
    category: "Gaming & In-App Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.google.com/googleplay/answer/7018481",
    darkPatterns: ["Store vs. In-App Billing Split", "App Uninstall Does Not Cancel Trap", "Multiple Google / Apple Accounts", "UPI Mandate / Store Billing Split"],
    summary: "Cancel an Asphalt Unite subscription through Google Play (Payments & subscriptions > Subscriptions) on Android or Apple App Store (Settings > [Name] > Subscriptions) on iOS—and revoke any linked UPI AutoPay mandate if billed via UPI.",
    steps: [
      "**Cancel in Google Play (Android):** Open **Google Play** on the Google account used to purchase, tap your **Profile icon > Payments & subscriptions > Subscriptions**, select **Asphalt Legends Unite** (or **Asphalt Unite**), and tap **Cancel subscription** following the prompts.",
      "**Cancel in Apple App Store (iOS):** Open **iPhone/iPad Settings**, tap **your name / Apple ID** at the top, select **Subscriptions**, find **Asphalt Legends Unite** (or **Asphalt Unite**), and tap **Cancel Subscription** to confirm.",
      "**Revoke UPI Mandate & Save Proof:** If you approved a UPI AutoPay or recurring mandate in a payment app (such as Google Pay, PhonePe, or Paytm), cancel that mandate directly as well; do not rely on uninstalling the game to stop billing, and save your cancellation confirmation."
    ],
    paymentTip: "Uninstalling Asphalt Unite does not cancel an active recurring store subscription or UPI AutoPay mandate, and if you do not see the plan listed, verify that you are signed into the exact Google account or Apple ID—and exact merchant/mandate name—that processed the payment.",
    supportScript: null
  },
  {
    id: "fifa-fc-mobile-subscription",
    name: "FIFA / EA Sports FC Subscription & AutoPay",
    category: "Gaming & In-App Subscriptions",
    region: "Global",
    difficulty: "Easy",
    estimatedTime: "2–4 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://help.ea.com/en/articles/ea-account/how-to-cancel-ea-play/",
    darkPatterns: ["Store vs. EA Account Billing Split", "App Uninstall Does Not Cancel Trap", "One-Time Packs vs. Recurring Subscriptions", "Multiple Google / Apple / EA Accounts"],
    summary: "Cancel a FIFA / EA Sports FC subscription in Google Play (Payments & subscriptions > Subscriptions) on Android, Apple App Store (Settings > [Name] > Subscriptions) on iOS, or your EA Account for EA Play—and revoke any linked UPI AutoPay mandate.",
    steps: [
      "**Cancel in Google Play or Apple Subscriptions:** On **Android**, open **Google Play > Profile > Payments & subscriptions > Subscriptions** on the charged Google account, select the game or subscription, and tap **Cancel subscription**; on **iOS**, open **Settings > [Your Name] > Subscriptions**, select the subscription, and tap **Cancel Subscription**.",
      "**Check EA Account & Linked UPI Mandate:** If you subscribed to **EA Play** directly on PC/EA Account, sign in to your **EA Account > Subscriptions and Memberships** and select **Cancel membership** (or manage via PlayStation, Xbox, Steam, or Epic if billed there); if you approved a UPI AutoPay mandate in a payment app, cancel that mandate directly as well.",
      "**Verify Before Renewal & Save Proof:** Confirm auto-renewal is off before your next cycle; do not rely on uninstalling the game or deleting your account to stop billing, note that store/in-game packs are often one-time purchases rather than recurring subscriptions, and save your confirmation."
    ],
    paymentTip: "Uninstalling the game does not cancel an active subscription, removing a payment method without cancelling can trigger backup methods or pause/resume states, and refunds for store-billed charges are requested through Google Play order history or Apple's reportaproblem.apple.com rather than by uninstalling.",
    supportScript: null
  },
  {
    id: "teen-patti-subscription",
    name: "Teen Patti Subscription & AutoPay",
    category: "Gaming & In-App Subscriptions",
    region: "India",
    difficulty: "Medium",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://support.google.com/googleplay/answer/7018481",
    darkPatterns: ["Store vs. UPI Mandate Billing Split", "Wallet Top-Up vs. Recurring Mandate Confusion", "App Uninstall Does Not Cancel Trap", "No Automatic Past-Debit Refunds"],
    summary: "Cancel a Teen Patti subscription in Google Play or Apple Subscriptions if store-billed, and revoke any active UPI AutoPay or recurring mandate in your payment or banking app before future debits trigger.",
    steps: [
      "**Revoke UPI AutoPay or PaymentpaymentTip: \"Uninstalling a Teen Patti app does not cancel an active UPI AutoPay mandate or store subscription, revoking a mandate stops future scheduled debits rather than automatically refunding completed payments, and wallet deposits/top-ups generally cannot be cancelled once credited to a game balance.\", Mandate:** Open the UPI or payment app where auto-debits were authorized (such as Google Pay, PhonePe, Paytm, or BHIM), open **AutoPay / Mandates**, locate any active mandate for the Teen Patti app or merchant, and cancel/revoke it with your **UPI PIN** (or check standing instructions/e-mandates in your bank app).",
      "**Cancel Store Subscription (If Applicable):** Open **Google Play** on the Google account used for payment, tap your **Profile icon > Payments & subscriptions > Subscriptions**, check for any Teen Patti subscription, and tap **Cancel subscription** following the prompts (or check **Apple Subscriptions** on iOS).",
      "**Verify Before Renewal & Save Proof:** Confirm that any linked mandate and store subscription show as cancelled/revoked before the next billing window; do not rely on uninstalling the app to stop recurring charges, and save confirmation screenshots or transaction references (UTR/RRN) if you need support or dispute help."
    ],
    paymentTip: "Uninstalling a Teen Patti app does not cancel an active UPI AutoPay mandate or store subscription, revoking a mandate stops future scheduled debits rather than automatically refunding completed payments, and wallet deposits/top-ups generally cannot be cancelled once credited to a game balance.",
    supportScript: null
  },
  {
    id: "winzo-subscription",
    name: "WinZO Subscription & AutoPay",
    category: "Gaming & In-App Subscriptions",
    region: "India",
    difficulty: "Medium",
    estimatedTime: "3–5 mins",
    lastVerified: "Nov 2026",
    directUrl: "https://winzohelpdesk.freshdesk.com/support/discussions/topics/89000247138",
    darkPatterns: ["UPI / Bank AutoPay Mandate Split", "App Uninstall Does Not Cancel Trap", "Accidental AutoPay Charge Refund Friction", "Multiple Payment / Bank Accounts"],
    summary: "Stop WinZO recurring charges by revoking any active UPI AutoPay or bank mandate in your payment or banking app, cancelling any store subscription if applicable, and checking WinZO support with transaction proof if needed.",
    steps: [
      "**Revoke UPI AutoPay or Recurring Mandate:** Open the UPI or payment app where auto-debits were set up (such as Google Pay, PhonePe, Paytm, or BHIM), go to **AutoPay / Mandates**, select the active **WinZO** mandate, and cancel/revoke it with your **UPI PIN** (or check standing instructions/e-mandates in your bank app).",
      "**Check App & Store Subscriptions:** Check subscription/payment settings inside the app and verify **Google Play > Profile > Payments & subscriptions > Subscriptions** (or **Apple Subscriptions** on iOS) in case a recurring plan was billed there.",
      "**Contact Support if Needed & Save Proof:** Confirm that the mandate shows as cancelled/revoked prior to the next billing date; do not rely on uninstalling WinZO to stop recurring deductions, and if an unwanted or accidental AutoPay debit occurred, save screenshots and payment references and submit a ticket via WinZO Help Center / support."
    ],
    paymentTip: "Uninstalling WinZO does not revoke a UPI AutoPay or bank mandate, revoking a mandate blocks future debits rather than automatically refunding past charges, and if unauthorized or recurring deductions continue after revocation, escalate with your UPI app, bank, or payment provider.",
    supportScript: null
  },
  
];
