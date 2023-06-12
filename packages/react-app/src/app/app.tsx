// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

export function App() {
  return (
    <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
      {/* form */}
      <form>
        <div>
          <label htmlFor="title" data-test-id="i18n.form.field.title">
            i18n.form.field.title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            aria-describedby="title-error-message"
          />
        </div>
        <div id="title-error-message">Required</div>
      </form>

      {/* graphic element */}
      <button
        aria-label="hide"
        onClick={() => {
          console.log('hide');
        }}
      >
        🫣
      </button>

      {/* description list */}
      <dl>
        <div>
          <div>
            <dt data-test-id="i18n.summary.price">i18n.summary.price</dt>
          </div>
          <dd>$200</dd>
        </div>
      </dl>

      {/* table */}
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
