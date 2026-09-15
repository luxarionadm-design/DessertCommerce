/**
 * @author luxarionadm-design
 * @file constants.js
 * @description Constants for the DessertCommerce engine.
 * @repository https://github.com/luxarionadm-design/DessertCommerce
 */

export const VERSION = 1;

// HTTP METHOD

/**
 * Represents the GET HTTP method.
 *
 * @type {number}
 * @constant
 */
export const GetMethod = 0;

/**
 * Represents the POST HTTP method.
 *
 * @type {number}
 * @constant
 */
export const PostMethod = 1;

/**
 * Represents the PATCH HTTP method.
 *
 * @type {number}
 * @constant
 */
export const PatchMethod = 2;

/**
 * Represents the DELETE HTTP method.
 *
 * @type {number}
 * @constant
 */
export const DeleteMethod = 3;

/**
 * Represents the PUT HTTP method.
 *
 * @type {number}
 * @constant
 */
export const PutMethod = 4;

/**
 * Represents the HTTP methods.
 *
 * @type {ConstantsHttpMethod}
 * @constant
 */
export const HTTP_METHOD = { GET: 0, POST: 1, PATCH: 2, DELETE: 3, PUT: 4 };

// HTTP STATUS

/**
 * Represents a successful HTTP status.
 *
 * @type {number}
 * @constant
 */
export const OkStatus = 200;

/**
 * Represents a created HTTP status.
 *
 * @type {number}
 * @constant
 */
export const CreatedStatus = 201;

/**
 * Represents a no-content HTTP status.
 *
 * @type {number}
 * @constant
 */
export const NoContentStatus = 204;

/**
 * Represents a bad-request HTTP status.
 *
 * @type {number}
 * @constant
 */
export const BadRequestStatus = 400;

/**
 * Represents an unauthorized HTTP status.
 *
 * @type {number}
 * @constant
 */
export const UnauthorizedStatus = 401;

/**
 * Represents a forbidden HTTP status.
 *
 * @type {number}
 * @constant
 */
export const ForbiddenStatus = 403;

/**
 * Represents a not-found HTTP status.
 *
 * @type {number}
 * @constant
 */
export const NotFoundStatus = 404;

/**
 * Represents an unprocessable-entity HTTP status.
 *
 * @type {number}
 * @constant
 */
export const UnprocessableStatus = 422;

/**
 * Represents a server-error HTTP status.
 *
 * @type {number}
 * @constant
 */
export const ServerErrorStatus = 500;

/**
 * Represents the HTTP status codes.
 *
 * @type {ConstantsHttpStatus}
 * @constant
 */
export const HTTP_STATUS = { OK: 200, CREATED: 201, NO_CONTENT: 204, BAD_REQUEST: 400, UNAUTHORIZED: 401, FORBIDDEN: 403, NOT_FOUND: 404, UNPROCESSABLE: 422, SERVER_ERROR: 500 };

// ENTRY TYPE

/**
 * Represents an income entry.
 *
 * @type {number}
 * @constant
 */
export const Income = 0;

/**
 * Represents an expense entry.
 *
 * @type {number}
 * @constant
 */
export const Expense = 1;

/**
 * Represents the entry types.
 *
 * @type {ConstantsEntryType}
 * @constant
 */
export const ENTRY_TYPE = { INCOME: 0, EXPENSE: 1 };

// INCOME CATEGORY

/**
 * Represents the sales income category.
 *
 * @type {number}
 * @constant
 */
export const SalesIncome = 100;

/**
 * Represents the service income category.
 *
 * @type {number}
 * @constant
 */
export const ServiceIncome = 101;

/**
 * Represents the investment income category.
 *
 * @type {number}
 * @constant
 */
export const InvestmentIncome = 102;

/**
 * Represents the other income category.
 *
 * @type {number}
 * @constant
 */
export const OtherIncome = 103;

/**
 * Represents the income categories.
 *
 * @type {ConstantsIncomeCategory}
 * @constant
 */
export const INCOME_CATEGORY = { SALES: 100, SERVICE: 101, INVESTMENT: 102, OTHER: 103 };

// EXPENSE CATEGORY

/**
 * Represents the purchase expense category.
 *
 * @type {number}
 * @constant
 */
export const PurchaseExpense = 200;

/**
 * Represents the salary expense category.
 *
 * @type {number}
 * @constant
 */
export const SalaryExpense = 201;

/**
 * Represents the rent expense category.
 *
 * @type {number}
 * @constant
 */
export const RentExpense = 202;

/**
 * Represents the utility expense category.
 *
 * @type {number}
 * @constant
 */
export const UtilityExpense = 203;

/**
 * Represents the tax expense category.
 *
 * @type {number}
 * @constant
 */
export const TaxExpense = 204;

/**
 * Represents the other expense category.
 *
 * @type {number}
 * @constant
 */
export const OtherExpense = 205;

/**
 * Represents the expense categories.
 *
 * @type {ConstantsExpenseCategory}
 * @constant
 */
export const EXPENSE_CATEGORY = { PURCHASE: 200, SALARY: 201, RENT: 202, UTILITY: 203, TAX: 204, OTHER: 205 };

// ACCOUNT TYPE

/**
 * Represents an asset account.
 *
 * @type {number}
 * @constant
 */
export const AssetAccount = 300;

/**
 * Represents a liability account.
 *
 * @type {number}
 * @constant
 */
export const LiabilityAccount = 301;

/**
 * Represents an equity account.
 *
 * @type {number}
 * @constant
 */
export const EquityAccount = 302;

/**
 * Represents a revenue account.
 *
 * @type {number}
 * @constant
 */
export const RevenueAccount = 303;

/**
 * Represents an expense account.
 *
 * @type {number}
 * @constant
 */
export const ExpenseAccount = 304;

/**
 * Represents the account types.
 *
 * @type {ConstantsAccountType}
 * @constant
 */
export const ACCOUNT_TYPE = { ASSET: 300, LIABILITY: 301, EQUITY: 302, REVENUE: 303, EXPENSE: 304 };

// ACCOUNT NORMAL BALANCE

/**
 * Represents a debit normal balance.
 *
 * @type {number}
 * @constant
 */
export const DebitBalance = 0;

/**
 * Represents a credit normal balance.
 *
 * @type {number}
 * @constant
 */
export const CreditBalance = 1;

/**
 * Represents the account normal balances.
 *
 * @type {ConstantsNormalBalance}
 * @constant
 */
export const NORMAL_BALANCE = { DEBIT: 0, CREDIT: 1 };

// PAYMENT METHOD

/**
 * Represents the cash payment method.
 *
 * @type {number}
 * @constant
 */
export const CashPayment = 400;

/**
 * Represents the bank transfer payment method.
 *
 * @type {number}
 * @constant
 */
export const TransferPayment = 401;

/**
 * Represents the e-wallet payment method.
 *
 * @type {number}
 * @constant
 */
export const EWalletPayment = 402;

/**
 * Represents the card payment method.
 *
 * @type {number}
 * @constant
 */
export const CardPayment = 403;

/**
 * Represents the credit payment method.
 *
 * @type {number}
 * @constant
 */
export const CreditPayment = 404;

/**
 * Represents the payment methods.
 *
 * @type {ConstantsPaymentMethod}
 * @constant
 */
export const PAYMENT_METHOD = { CASH: 400, TRANSFER: 401, E_WALLET: 402, CARD: 403, CREDIT: 404 };

// CASH FLOW

/**
 * Represents cash flowing into the business.
 *
 * @type {number}
 * @constant
 */
export const CashIn = 500;

/**
 * Represents cash flowing out of the business.
 *
 * @type {number}
 * @constant
 */
export const CashOut = 501;

/**
 * Represents the cash flow directions.
 *
 * @type {ConstantsCashFlow}
 * @constant
 */
export const CASH_FLOW = { IN: 500, OUT: 501 };

// TRANSACTION TYPE

/**
 * Represents a sale transaction.
 *
 * @type {number}
 * @constant
 */
export const SaleTransaction = 600;

/**
 * Represents a purchase transaction.
 *
 * @type {number}
 * @constant
 */
export const PurchaseTransaction = 601;

/**
 * Represents a refund transaction.
 *
 * @type {number}
 * @constant
 */
export const RefundTransaction = 602;

/**
 * Represents an adjustment transaction.
 *
 * @type {number}
 * @constant
 */
export const AdjustmentTransaction = 603;

/**
 * Represents the transaction types.
 *
 * @type {ConstantsTransactionType}
 * @constant
 */
export const TRANSACTION_TYPE = { SALE: 600, PURCHASE: 601, REFUND: 602, ADJUSTMENT: 603 };

// REPORT TYPE

/**
 * Represents the income statement report.
 *
 * @type {number}
 * @constant
 */
export const IncomeStatementReport = 700;

/**
 * Represents the balance sheet report.
 *
 * @type {number}
 * @constant
 */
export const BalanceSheetReport = 701;

/**
 * Represents the cash flow report.
 *
 * @type {number}
 * @constant
 */
export const CashFlowReport = 702;

/**
 * Represents the equity statement report.
 *
 * @type {number}
 * @constant
 */
export const EquityStatementReport = 703;

/**
 * Represents the report types.
 *
 * @type {ConstantsReportType}
 * @constant
 */
export const REPORT_TYPE = { INCOME_STATEMENT: 700, BALANCE_SHEET: 701, CASH_FLOW: 702, EQUITY_STATEMENT: 703 };

// CURRENCY

/**
 * Represents the Indonesian Rupiah currency.
 *
 * @type {number}
 * @constant
 */
export const IDR = 800;

/**
 * Represents the United States Dollar currency.
 *
 * @type {number}
 * @constant
 */
export const USD = 801;

/**
 * Represents the Euro currency.
 *
 * @type {number}
 * @constant
 */
export const EUR = 802;

/**
 * Represents the Singapore Dollar currency.
 *
 * @type {number}
 * @constant
 */
export const SGD = 803;

/**
 * Represents the Japanese Yen currency.
 *
 * @type {number}
 * @constant
 */
export const JPY = 804;

/**
 * Represents the currencies.
 *
 * @type {ConstantsCurrency}
 * @constant
 */
export const CURRENCY = { IDR: 800, USD: 801, EUR: 802, SGD: 803, JPY: 804 };

// TIME FILTER

/**
 * Represents the created-at time filter.
 *
 * @type {number}
 * @constant
 */
export const CreatedAtFilter = 900;

/**
 * Represents the updated-at time filter.
 *
 * @type {number}
 * @constant
 */
export const UpdatedAtFilter = 901;

/**
 * Represents the synchronized-at time filter.
 *
 * @type {number}
 * @constant
 */
export const SynchronizedAtFilter = 902;

/**
 * Represents the time filters.
 *
 * @type {ConstantsTimeFilter}
 * @constant
 */
export const TIME_FILTER = { CREATED_AT: 900, UPDATED_AT: 901, SYNCHRONIZED_AT: 902 };

// REORDER TYPE

/**
 * Represents ascending sort order.
 *
 * @type {number}
 * @constant
 */
export const Ascending = 1000;

/**
 * Represents descending sort order.
 *
 * @type {number}
 * @constant
 */
export const Descending = 1001;

/**
 * Represents the sort orders.
 *
 * @type {ConstantsReorderType}
 * @constant
 */
export const REORDER_TYPE = { ASC: 1000, DESC: 1001 };

// LOG LEVEL

/**
 * Represents the debug log level.
 *
 * @type {number}
 * @constant
 */
export const DebugLevel = 1100;

/**
 * Represents the info log level.
 *
 * @type {number}
 * @constant
 */
export const InfoLevel = 1101;

/**
 * Represents the warn log level.
 *
 * @type {number}
 * @constant
 */
export const WarnLevel = 1102;

/**
 * Represents the error log level.
 *
 * @type {number}
 * @constant
 */
export const ErrorLevel = 1103;

/**
 * Represents the log levels.
 *
 * @type {ConstantsLogLevel}
 * @constant
 */
export const LOG_LEVEL = { DEBUG: 1100, INFO: 1101, WARN: 1102, ERROR: 1103 };

// REPORT PERIOD

/**
 * Represents a daily report period.
 *
 * @type {number}
 * @constant
 */
export const DailyPeriod = 1200;

/**
 * Represents a weekly report period.
 *
 * @type {number}
 * @constant
 */
export const WeeklyPeriod = 1201;

/**
 * Represents a monthly report period.
 *
 * @type {number}
 * @constant
 */
export const MonthlyPeriod = 1202;

/**
 * Represents a quarterly report period.
 *
 * @type {number}
 * @constant
 */
export const QuarterlyPeriod = 1203;

/**
 * Represents a yearly report period.
 *
 * @type {number}
 * @constant
 */
export const YearlyPeriod = 1204;

/**
 * Represents the report periods.
 *
 * @type {ConstantsReportPeriod}
 * @constant
 */
export const REPORT_PERIOD = { DAILY: 1200, WEEKLY: 1201, MONTHLY: 1202, QUARTERLY: 1203, YEARLY: 1204 };

// TYPE DEFINITIONS

/**
 * This type represents the HTTP methods.
 *
 * @typedef {Object} ConstantsHttpMethod
 * @property {number} GET - The GET method.
 * @property {number} POST - The POST method.
 * @property {number} PATCH - The PATCH method.
 * @property {number} DELETE - The DELETE method.
 * @property {number} PUT - The PUT method.
 **/

/**
 * This type represents the HTTP status codes.
 *
 * @typedef {Object} ConstantsHttpStatus
 * @property {number} OK - The OK status.
 * @property {number} CREATED - The created status.
 * @property {number} NO_CONTENT - The no-content status.
 * @property {number} BAD_REQUEST - The bad-request status.
 * @property {number} UNAUTHORIZED - The unauthorized status.
 * @property {number} FORBIDDEN - The forbidden status.
 * @property {number} NOT_FOUND - The not-found status.
 * @property {number} UNPROCESSABLE - The unprocessable status.
 * @property {number} SERVER_ERROR - The server-error status.
 **/

/**
 * This type represents the entry types.
 *
 * @typedef {Object} ConstantsEntryType
 * @property {number} INCOME - The income entry.
 * @property {number} EXPENSE - The expense entry.
 **/

/**
 * This type represents the income categories.
 *
 * @typedef {Object} ConstantsIncomeCategory
 * @property {number} SALES - The sales income.
 * @property {number} SERVICE - The service income.
 * @property {number} INVESTMENT - The investment income.
 * @property {number} OTHER - The other income.
 **/

/**
 * This type represents the expense categories.
 *
 * @typedef {Object} ConstantsExpenseCategory
 * @property {number} PURCHASE - The purchase expense.
 * @property {number} SALARY - The salary expense.
 * @property {number} RENT - The rent expense.
 * @property {number} UTILITY - The utility expense.
 * @property {number} TAX - The tax expense.
 * @property {number} OTHER - The other expense.
 **/

/**
 * This type represents the account types.
 *
 * @typedef {Object} ConstantsAccountType
 * @property {number} ASSET - The asset account.
 * @property {number} LIABILITY - The liability account.
 * @property {number} EQUITY - The equity account.
 * @property {number} REVENUE - The revenue account.
 * @property {number} EXPENSE - The expense account.
 **/

/**
 * This type represents the account normal balances.
 *
 * @typedef {Object} ConstantsNormalBalance
 * @property {number} DEBIT - The debit balance.
 * @property {number} CREDIT - The credit balance.
 **/

/**
 * This type represents the payment methods.
 *
 * @typedef {Object} ConstantsPaymentMethod
 * @property {number} CASH - The cash payment.
 * @property {number} TRANSFER - The bank transfer payment.
 * @property {number} E_WALLET - The e-wallet payment.
 * @property {number} CARD - The card payment.
 * @property {number} CREDIT - The credit payment.
 **/

/**
 * This type represents the cash flow directions.
 *
 * @typedef {Object} ConstantsCashFlow
 * @property {number} IN - The cash inflow.
 * @property {number} OUT - The cash outflow.
 **/

/**
 * This type represents the transaction types.
 *
 * @typedef {Object} ConstantsTransactionType
 * @property {number} SALE - The sale transaction.
 * @property {number} PURCHASE - The purchase transaction.
 * @property {number} REFUND - The refund transaction.
 * @property {number} ADJUSTMENT - The adjustment transaction.
 **/

/**
 * This type represents the report types.
 *
 * @typedef {Object} ConstantsReportType
 * @property {number} INCOME_STATEMENT - The income statement.
 * @property {number} BALANCE_SHEET - The balance sheet.
 * @property {number} CASH_FLOW - The cash flow.
 * @property {number} EQUITY_STATEMENT - The equity statement.
 **/

/**
 * This type represents the currencies.
 *
 * @typedef {Object} ConstantsCurrency
 * @property {number} IDR - The Indonesian Rupiah.
 * @property {number} USD - The United States Dollar.
 * @property {number} EUR - The Euro.
 * @property {number} SGD - The Singapore Dollar.
 * @property {number} JPY - The Japanese Yen.
 **/

/**
 * This type represents the time filters.
 *
 * @typedef {Object} ConstantsTimeFilter
 * @property {number} CREATED_AT - The created-at filter.
 * @property {number} UPDATED_AT - The updated-at filter.
 * @property {number} SYNCHRONIZED_AT - The synchronized-at filter.
 **/

/**
 * This type represents the sort orders.
 *
 * @typedef {Object} ConstantsReorderType
 * @property {number} ASC - The ascending order.
 * @property {number} DESC - The descending order.
 **/

/**
 * This type represents the log levels.
 *
 * @typedef {Object} ConstantsLogLevel
 * @property {number} DEBUG - The debug level.
 * @property {number} INFO - The info level.
 * @property {number} WARN - The warn level.
 * @property {number} ERROR - The error level.
 **/

/**
 * This type represents the report periods.
 *
 * @typedef {Object} ConstantsReportPeriod
 * @property {number} DAILY - The daily period.
 * @property {number} WEEKLY - The weekly period.
 * @property {number} MONTHLY - The monthly period.
 * @property {number} QUARTERLY - The quarterly period.
 * @property {number} YEARLY - The yearly period.
 **/
