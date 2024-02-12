import { useTranslation } from "react-i18next";

export default function Reservation() {
    let { t } = useTranslation()

    return (
        <div className="pt-4 text-center">
            <h1>{t('reservation')}</h1>
        </div>
    )
}
