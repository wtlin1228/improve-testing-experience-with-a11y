// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* form */}
      <h1>Form</h1>
      <form>
        <div>
          <label htmlFor="title" data-test-id="i18n.form.field.title">
            i18n.form.field.title
          </label>
          <input
            id="title"
            name="title"
            aria-describedby="title-helper-message title-error-message"
            type="text"
          />
        </div>
        <div id="title-helper-message">
          Title will be put on the top of your post.
        </div>
        <div id="title-error-message">Required</div>
      </form>

      {/* graphic element */}
      <h1>Graphic Element</h1>
      <button
        aria-label="hide"
        onClick={() => {
          console.log('hide');
        }}
      >
        🫣
      </button>

      {/* description list */}
      <h1>Description List</h1>
      <dl>
        <div>
          <div>
            <dt data-test-id="i18n.summary.price">i18n.summary.price</dt>
          </div>
          <dd>$200</dd>
        </div>
      </dl>

      {/* table */}
      <h1>Table</h1>
      <table className={styles.table}>
        <caption className={styles.caption} data-test-id="i18n.table.caption">
          i18n.table.caption
        </caption>
        <thead className={styles.thead}>
          <tr>
            <th scope="col" data-test-id="i18n.table.col.header.order_id">
              i18n.table.col.header.order_id
            </th>
            <th scope="col" data-test-id="i18n.table.col.header.order_by">
              i18n.table.col.header.order_by
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.td}>9mq1123p</td>
            <td className={styles.td}>Leo</td>
          </tr>
          <tr>
            <td className={styles.td}>mkq12ie4</td>
            <td className={styles.td}>Leo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
