document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const regionFilter = document.getElementById("regionFilter");
  const difficultyFilter = document.getElementById("difficultyFilter");
  const resultsCount = document.getElementById("resultsCount");
  const cardsContainer = document.getElementById("cardsContainer");
  const modalElement = document.getElementById("guideModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const submitTrapForm = document.getElementById("submitTrapForm");
  const submitModalElement = document.getElementById("submitModal");

  // Optional: paste your Formspree endpoint URL here when ready (e.g. "https://formspree.io/f/xxxxxxx")
  const FORMSPREE_ENDPOINT = "";
  const STORAGE_KEY = "howtocancel_submitted_traps";

  const guideModal = new bootstrap.Modal(modalElement);

  const guides = Array.isArray(window.GUIDES_DATA)
    ? window.GUIDES_DATA
    : typeof GUIDES_DATA !== "undefined"
      ? GUIDES_DATA
      : [];

  function compareGuidesByName(a, b) {
    return (a.name || "").trim().localeCompare((b.name || "").trim(), undefined, {
      sensitivity: "base",
      numeric: true
    });
  }

  function escapeHtml(str) {
    return String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // Escapes HTML first, then turns **bold** into <strong>bold</strong> safely
  function formatInlineText(str) {
    return escapeHtml(str).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  }

  function getDifficultyBadgeClass(difficulty) {
    switch (difficulty) {
      case "Easy":
        return "bg-success-subtle text-success border border-success-subtle";
      case "Hard":
        return "bg-warning-subtle text-warning-emphasis border border-warning-subtle";
      case "Trap":
        return "bg-danger-subtle text-danger border border-danger-subtle";
      default:
        return "bg-secondary-subtle text-secondary border border-secondary-subtle";
    }
  }

  function isPaymentAppGuide(guide) {
    const category = (guide.category || "").toLowerCase();
    const id = (guide.id || "").toLowerCase();
    const name = (guide.name || "").toLowerCase();

    return (
      category.includes("payment") ||
      category.includes("autopay") ||
      id.startsWith("upi-") ||
      name.includes("upi") ||
      name.includes("autopay") ||
      name.includes("mandate")
    );
  }

  function getFilteredGuides() {
    const query = (searchInput?.value || "").trim().toLowerCase();
    const selectedRegion = regionFilter?.value || "All";
    const selectedDifficulty = difficultyFilter?.value || "All";

    const matches = guides.filter((guide) => {
      const matchesRegion = selectedRegion === "All" || guide.region === selectedRegion;
      const matchesDifficulty = selectedDifficulty === "All" || guide.difficulty === selectedDifficulty;

      if (!matchesRegion || !matchesDifficulty) return false;
      if (!query) return true;

      const searchableText = [
        guide.name,
        guide.category,
        guide.region,
        guide.difficulty,
        guide.summary,
        ...(guide.darkPatterns || [])
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(query);
    });

    const sortedMatches = [...matches].sort(compareGuidesByName);

    if (query === "upi") {
      return sortedMatches.sort((a, b) => {
        const aIsPayment = isPaymentAppGuide(a) ? 0 : 1;
        const bIsPayment = isPaymentAppGuide(b) ? 0 : 1;
        return aIsPayment - bIsPayment;
      });
    }

    return sortedMatches;
  }

  function updateResultsCount(shown, total) {
    if (!resultsCount) return;
    resultsCount.textContent =
      shown === total
        ? `${total} ${total === 1 ? "guide" : "guides"}`
        : `Showing ${shown} of ${total} guides`;
  }

  function renderCards() {
    if (!cardsContainer) return;

    const filtered = getFilteredGuides();
    updateResultsCount(filtered.length, guides.length);

    if (filtered.length === 0) {
      cardsContainer.innerHTML = `
        <div class="col-12">
          <div class="bg-white rounded-4 p-5 text-center shadow-sm border">
            <i class="bi bi-search fs-2 text-muted d-block mb-2"></i>
            <h3 class="h5 fw-bold">No matching cancellation guides found</h3>
            <p class="text-muted mb-3">Try a different keyword, clear a filter, or submit this service as a trap.</p>
            <button type="button" id="resetFiltersBtn" class="btn btn-outline-dark btn-sm px-3">
              Reset Filters
            </button>
          </div>
        </div>
      `;

      document.getElementById("resetFiltersBtn")?.addEventListener("click", () => {
        if (searchInput) searchInput.value = "";
        if (regionFilter) regionFilter.value = "All";
        if (difficultyFilter) difficultyFilter.value = "All";
        renderCards();
      });
      return;
    }

    cardsContainer.innerHTML = filtered
      .map((guide) => {
        const patternsHtml = (guide.darkPatterns || [])
          .slice(0, 2)
          .map(
            (pattern) =>
              `<span class="badge rounded-pill bg-light text-dark border small fw-normal">${escapeHtml(pattern)}</span>`
          )
          .join(" ");

        return `
          <div class="col-12 col-md-6 col-lg-4">
            <article class="card service-card h-100 border-0 shadow-sm" data-guide-id="${escapeHtml(guide.id)}" tabindex="0" role="button" aria-label="View cancellation guide for ${escapeHtml(guide.name)}">
              <div class="card-body d-flex flex-column p-4">
                <div class="d-flex justify-content-between align-items-start gap-2 mb-2">
                  <span class="badge ${getDifficultyBadgeClass(guide.difficulty)} px-2 py-1">
                    ${escapeHtml(guide.difficulty)}
                  </span>
                  <span class="text-muted small">
                    <i class="bi bi-globe2 me-1"></i>${escapeHtml(guide.region)}
                  </span>
                </div>

                <h3 class="h5 fw-bold mb-1">${escapeHtml(guide.name)}</h3>
                <p class="text-muted small mb-3">
                  ${escapeHtml(guide.category)} &bull; <i class="bi bi-clock me-1"></i>${escapeHtml(guide.estimatedTime || "Quick")}
                </p>

                <p class="card-text text-secondary small trap-preview mb-3">
                  ${formatInlineText(guide.summary)}
                </p>

                <div class="d-flex flex-wrap gap-1 mb-4">
                  ${patternsHtml}
                </div>

                <div class="mt-auto pt-3 border-top d-flex justify-content-between align-items-center small">
                  <span class="text-muted">Verified: ${escapeHtml(guide.lastVerified || "Recently")}</span>
                  <span class="fw-semibold text-danger">
                    View Steps <i class="bi bi-arrow-right ms-1"></i>
                  </span>
                </div>
              </div>
            </article>
          </div>
        `;
      })
      .join("");
  }

  function openGuideModal(guideId, updateHash = true) {
    const guide = guides.find((item) => item.id === guideId);
    if (!guide || !modalTitle || !modalBody) return;

    modalTitle.innerHTML = `
      ${escapeHtml(guide.name)}
      <span class="badge ${getDifficultyBadgeClass(guide.difficulty)} ms-2 fs-6 align-middle">${escapeHtml(guide.difficulty)}</span>
    `;

    const stepsHtml = (guide.steps || [])
      .map(
        (step, index) => `
          <li class="list-group-item border-0 px-0 py-2 d-flex gap-3 align-items-start">
            <span class="badge rounded-pill bg-dark mt-1">${index + 1}</span>
            <span class="small text-body">${formatInlineText(step)}</span>
          </li>
        `
      )
      .join("");

    const allPatternsHtml = (guide.darkPatterns || [])
      .map(
        (p) =>
          `<span class="badge bg-danger-subtle text-danger border border-danger-subtle px-2 py-1">${escapeHtml(p)}</span>`
      )
      .join(" ");

    const paymentTipHtml = guide.paymentTip
      ? `
        <div class="alert alert-warning border-0 small mt-4 mb-0" role="alert">
          <div class="fw-bold mb-1"><i class="bi bi-credit-card-2-back me-1"></i>Payment &amp; Auto-Debit Tip</div>
          <div>${formatInlineText(guide.paymentTip)}</div>
        </div>
      `
      : "";

    const scriptHtml = guide.supportScript
      ? `
        <div class="mt-4 pt-3 border-top">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <h6 class="fw-bold mb-0"><i class="bi bi-chat-square-text me-1"></i>Copy-Paste Support Script</h6>
            <button type="button" id="copyScriptBtn" class="btn btn-outline-dark btn-sm">
              <i class="bi bi-clipboard me-1"></i>Copy Script
            </button>
          </div>
          <pre id="supportScriptText" class="bg-light border rounded-3 p-3 small mb-0" style="white-space: pre-wrap;">${escapeHtml(guide.supportScript)}</pre>
        </div>
      `
      : "";

    const safeUrl =
      guide.directUrl && /^https?:\/\//i.test(guide.directUrl) ? guide.directUrl : null;

    modalBody.innerHTML = `
      <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
        <div class="text-muted small">
          <strong>Region:</strong> ${escapeHtml(guide.region)} &bull;
          <strong>Est. Time:</strong> ${escapeHtml(guide.estimatedTime || "Varies")} &bull;
          <strong>Verified:</strong> ${escapeHtml(guide.lastVerified || "Recently")}
        </div>
        ${
          safeUrl
            ? `<a href="${escapeHtml(safeUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-danger btn-sm fw-semibold">
                 Open Cancellation Page <i class="bi bi-box-arrow-up-right ms-1"></i>
               </a>`
            : ""
        }
      </div>

      <p class="text-secondary mb-3">${formatInlineText(guide.summary)}</p>

      ${
        allPatternsHtml
          ? `<div class="mb-4"><div class="small fw-semibold text-muted mb-1">Spotted Dark Patterns:</div><div class="d-flex flex-wrap gap-1">${allPatternsHtml}</div></div>`
          : ""
      }

      <h6 class="fw-bold mb-2">Step-by-Step Cancellation Guide</h6>
      <ol class="list-group list-group-numbered-none mb-2">
        ${stepsHtml}
      </ol>

      ${paymentTipHtml}
      ${scriptHtml}
    `;

    const copyBtn = document.getElementById("copyScriptBtn");
    if (copyBtn && guide.supportScript) {
      copyBtn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(guide.supportScript);
          copyBtn.innerHTML = `<i class="bi bi-check2 me-1"></i>Copied!`;
          copyBtn.classList.replace("btn-outline-dark", "btn-success");
          setTimeout(() => {
            copyBtn.innerHTML = `<i class="bi bi-clipboard me-1"></i>Copy Script`;
            copyBtn.classList.replace("btn-success", "btn-outline-dark");
          }, 2000);
        } catch {
          copyBtn.textContent = "Select & copy manually";
        }
      });
    }

    if (updateHash) {
      history.replaceState(null, "", `#${encodeURIComponent(guide.id)}`);
    }

    guideModal.show();
  }

  cardsContainer?.addEventListener("click", (e) => {
    const card = e.target.closest("[data-guide-id]");
    if (card) {
      openGuideModal(card.getAttribute("data-guide-id"));
    }
  });

  cardsContainer?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const card = e.target.closest("[data-guide-id]");
      if (card) {
        e.preventDefault();
        openGuideModal(card.getAttribute("data-guide-id"));
      }
    }
  });

  modalElement?.addEventListener("hidden.bs.modal", () => {
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  });

  searchInput?.addEventListener("input", renderCards);
  regionFilter?.addEventListener("change", renderCards);
  difficultyFilter?.addEventListener("change", renderCards);

  function saveSubmittedTrap(serviceName, trapDetails) {
    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      existing.unshift({
        service: serviceName,
        trap: trapDetails,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    } catch {
      // Ignore storage quota/privacy mode errors
    }
  }

  const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
  const WEB3FORMS_ACCESS_KEY = "87cf3df8-7c8d-40be-9d83-aa7d91e3a94b";

  if (submitTrapForm) {
    const initialFormHtml = submitTrapForm.outerHTML;

    submitModalElement?.addEventListener("show.bs.modal", () => {
      const modalBodyEl = submitModalElement.querySelector(".modal-body");
      if (modalBodyEl && !modalBodyEl.querySelector("#submitTrapForm")) {
        modalBodyEl.innerHTML = initialFormHtml;
        bindTrapFormSubmit(modalBodyEl.querySelector("#submitTrapForm"));
      }
    });

    function bindTrapFormSubmit(formEl) {
      formEl?.addEventListener("submit", async (e) => {
        e.preventDefault();

        const serviceInput = formEl.querySelector('[name="service_name"]');
        const stepsInput = formEl.querySelector('[name="steps_or_trap"]');
        const submitBtn = formEl.querySelector('button[type="submit"]');

        const serviceName = serviceInput?.value.trim() || "";
        const trapDetails = stepsInput?.value.trim() || "";
        if (!serviceName || !trapDetails) return;

        saveSubmittedTrap(serviceName, trapDetails);

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = "Submitting...";
        }

        let sentToWeb3Forms = false;

        try {
          const payload = {
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: `HowToCancel Trap Report: ${serviceName}`,
            from_name: "HowToCancel Directory",
            service_name: serviceName,
            steps_or_trap: trapDetails,
            submitted_at: new Date().toISOString()
          };

          const response = await fetch(WEB3FORMS_ENDPOINT, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify(payload)
          });

          const data = await response.json().catch(() => ({}));
          sentToWeb3Forms = response.ok && Boolean(data.success);
        } catch {
          sentToWeb3Forms = false;
        }

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Submit Report & Help Others";
        }

        const formBody = formEl.closest(".modal-body");
        if (formBody) {
          formBody.innerHTML = `
            <div class="text-center py-3">
              <i class="bi bi-check-circle-fill text-success fs-1 d-block mb-2"></i>
              <h6 class="fw-bold">Thanks for reporting!</h6>
              <p class="text-secondary small mb-2">
                Your report for <strong>${escapeHtml(serviceName)}</strong> will be visible on this website after successful verification.
              </p>
              <p class="text-muted small mb-3">
                ${
                  sentToWeb3Forms
                    ? "Keep up your good work and kindness—it always comes back around."
                    : "Saved locally in your browser (could not confirm delivery right now, so keep a copy if needed)."
                }
              </p>
              <button type="button" class="btn btn-dark btn-sm px-4" data-bs-dismiss="modal">Done</button>
            </div>
          `;
        }
      });
    }

    bindTrapFormSubmit(submitTrapForm);
  }
  const reportIssueModalEl = document.getElementById("reportIssueModal");
  const reportIssueForm = document.getElementById("reportIssueForm");
  const ISSUES_STORAGE_KEY = "howtocancel_reported_issues";

  function saveReportedIssue(issueType, targetItem, issueDetails) {
    try {
      const existing = JSON.parse(localStorage.getItem(ISSUES_STORAGE_KEY) || "[]");
      existing.unshift({
        id: Date.now(),
        issueType,
        targetItem,
        issueDetails,
        createdAt: new Date().toISOString()
      });
      localStorage.setItem(ISSUES_STORAGE_KEY, JSON.stringify(existing.slice(0, 50)));
    } catch {
      // Ignore storage quota or private mode errors
    }
  }

  if (reportIssueForm) {
    const initialIssueFormHtml = reportIssueForm.outerHTML;

    reportIssueModalEl?.addEventListener("show.bs.modal", () => {
      const modalBodyEl = reportIssueModalEl.querySelector(".modal-body");
      if (modalBodyEl && !modalBodyEl.querySelector("#reportIssueForm")) {
        modalBodyEl.innerHTML = initialIssueFormHtml;
        bindIssueFormSubmit(modalBodyEl.querySelector("#reportIssueForm"));
      }
    });

    function bindIssueFormSubmit(formEl) {
      formEl?.addEventListener("submit", async (e) => {
        e.preventDefault();

        const typeSelect = formEl.querySelector('[name="issue_type"]');
        const targetInput = formEl.querySelector('[name="target_item"]');
        const detailsInput = formEl.querySelector('[name="issue_details"]');
        const submitBtn = formEl.querySelector('button[type="submit"]');

        const issueType = typeSelect?.value.trim() || "";
        const targetItem = targetInput?.value.trim() || "";
        const issueDetails = detailsInput?.value.trim() || "";
        if (!issueType || !targetItem || !issueDetails) return;

        saveReportedIssue(issueType, targetItem, issueDetails);

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = "Sending...";
        }

        let sentToWeb3Forms = false;

        try {
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify({
              access_key: "87cf3df8-7c8d-40be-9d83-aa7d91e3a94b",
              subject: `HowToCancel Issue (${issueType}): ${targetItem}`,
              from_name: "HowToCancel Issue Reporter",
              issue_type: issueType,
              target_item: targetItem,
              issue_details: issueDetails,
              submitted_at: new Date().toISOString()
            })
          });

          const data = await response.json().catch(() => ({}));
          sentToWeb3Forms = response.ok && Boolean(data.success);
        } catch {
          sentToWeb3Forms = false;
        }

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Send Issue Report";
        }

        const formBody = formEl.closest(".modal-body");
        if (formBody) {
          formBody.innerHTML = `
            <div class="text-center py-3">
              <i class="bi bi-check-circle-fill text-success fs-1 d-block mb-2"></i>
              <h6 class="fw-bold">Thanks for reporting!</h6>
              <p class="text-secondary small mb-2">
                Your note on <strong>${escapeHtml(targetItem)}</strong> (${escapeHtml(issueType)}) will be reviewed before any guide or site update goes live.
              </p>
              <p class="text-muted small mb-3">
                ${
                  sentToWeb3Forms
                    ? "Have a good day sir/ma'am."
                    : "Saved locally in your browser (could not confirm delivery right now)."
                }
              </p>
              <button type="button" class="btn btn-dark btn-sm px-4" data-bs-dismiss="modal">Done</button>
            </div>
          `;
        }
      });
    }

    bindIssueFormSubmit(reportIssueForm);
  }
  
  
  const reviewModalEl = document.getElementById("reviewFeedbackModal");
  const reviewForm = document.getElementById("reviewFeedbackForm");
  const REVIEWS_STORAGE_KEY = "howtocancel_user_reviews";

  function saveUserReview(reviewData) {
    try {
      const existing = JSON.parse(localStorage.getItem(REVIEWS_STORAGE_KEY) || "[]");
      existing.unshift({
        id: Date.now(),
        ...reviewData,
        createdAt: new Date().toISOString()
      });
      localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(existing.slice(0, 50)));
    } catch {
      // Ignore storage quota or private browsing errors
    }
  }

  if (reviewForm) {
    const initialReviewFormHtml = reviewForm.outerHTML;

    reviewModalEl?.addEventListener("show.bs.modal", () => {
      const modalBodyEl = reviewModalEl.querySelector(".modal-body");
      if (modalBodyEl && !modalBodyEl.querySelector("#reviewFeedbackForm")) {
        modalBodyEl.innerHTML = initialReviewFormHtml;
        bindReviewFormSubmit(modalBodyEl.querySelector("#reviewFeedbackForm"));
      }
    });

    function bindReviewFormSubmit(formEl) {
      formEl?.addEventListener("submit", async (e) => {
        e.preventDefault();

        const selectedRating = formEl.querySelector('[name="rating"]:checked')?.value || "5 / 5";
        const reviewerName = formEl.querySelector('[name="reviewer_name"]')?.value.trim() || "Anonymous";
        const reviewedService = formEl.querySelector('[name="reviewed_service"]')?.value.trim() || "General";
        const reviewComment = formEl.querySelector('[name="review_comment"]')?.value.trim() || "";
        const submitBtn = formEl.querySelector('button[type="submit"]');

        if (!reviewComment) return;

        const record = {
          rating: selectedRating,
          reviewerName,
          reviewedService,
          reviewComment
        };
        saveUserReview(record);

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = "Submitting...";
        }

        let sentToWeb3Forms = false;

        try {
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify({
              access_key: "87cf3df8-7c8d-40be-9d83-aa7d91e3a94b",
              subject: `HowToCancel Review (${selectedRating}): ${reviewedService}`,
              from_name: "HowToCancel Reviews",
              rating: selectedRating,
              reviewer_name: reviewerName,
              reviewed_service: reviewedService,
              review_comment: reviewComment,
              submitted_at: new Date().toISOString()
            })
          });

          const data = await response.json().catch(() => ({}));
          sentToWeb3Forms = response.ok && Boolean(data.success);
        } catch {
          sentToWeb3Forms = false;
        }

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Submit Review";
        }

        const formBody = formEl.closest(".modal-body");
        if (formBody) {
          formBody.innerHTML = `
            <div class="text-center py-3">
              <i class="bi bi-check-circle-fill text-success fs-1 d-block mb-2"></i>
              <h6 class="fw-bold">Thanks for your review!</h6>
              <p class="text-secondary small mb-2">
                Your <strong>${escapeHtml(selectedRating)}</strong> feedback${
                  reviewedService !== "General" ? ` on <strong>${escapeHtml(reviewedService)}</strong>` : ""
                } helps improve HowToCancel.
              </p>
              <p class="text-muted small mb-3">
                ${
                  sentToWeb3Forms
                    ? ""
                    : "Saved locally in your browser (could not confirm delivery right now)."
                }
              </p>
              <button type="button" class="btn btn-dark btn-sm px-4" data-bs-dismiss="modal">Done</button>
            </div>
          `;
        }
      });
    }

    bindReviewFormSubmit(reviewForm);
  }
  
  
  renderCards();

  const initialHashId = decodeURIComponent(window.location.hash.replace(/^#/, ""));
  if (initialHashId) {
    openGuideModal(initialHashId, false);
  }
});